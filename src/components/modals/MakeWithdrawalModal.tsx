import '../../styling/App.css';
import { Dialog, Button, Card, TextField } from "@mui/material";
import { menuButton, modalCard } from "../../styling/sxProps";
import { useState, useContext } from "react";
import { UserContext } from '../../context/userContext';
import { User } from '../../ts_types/types';
import { useWithdrawal } from '../../hooks/useWithdrawal';
import { typeGuardPgResponse, typeGuardValidationResponse } from '../../utils/utils';

export default function MakeWithdrawalModal () {

    const [open, setOpen] = useState<boolean>(false);
    const [withdrawAmount, setWithdrawAmount] = useState<string>("");
    const {user, setUser} = useContext(UserContext);
    const {step, handleWithdrawal, resetStep} = useWithdrawal();
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        const validEntry_REGEX: RegExp = /^\d+$/;
        if (validEntry_REGEX.test(e.target.value) || e.target.value === "") {
            setWithdrawAmount(e.target.value);
        };
    };

    const handleSubmit = async (amount: number, user: User): Promise<void> => {
        setErrorMessage("");
        const negativeAmount = (amount * -1);
        const response = await handleWithdrawal(negativeAmount, user)

        if (response === null) return;
        if (response && typeGuardValidationResponse(response) && response.message) {
            setErrorMessage(response.message)
        } else if (response && typeGuardPgResponse(response) && !isNaN(parseFloat(response.amount)) && response.last_withdraw_sum) {
            setWithdrawAmount("");
            setUser({...user, amount: parseFloat(response.amount), last_withdraw_date: response.last_withdraw_date, last_withdraw_sum: parseInt(response.last_withdraw_sum)})
        }
    };

    return(
        <>
            <Button 
            sx={menuButton}
            onClick={() => setOpen(!open)}    
            >
                <h2>WITHDRAW</h2>
            </Button>
            <Dialog
            open={open}
            >
                <Card
                sx={modalCard}>
                    {step === 0 &&
                        <>
                            <h3>Make a Deposit</h3>
                            <span className='growSpan' />
                            <p className='errorText'>{errorMessage}</p>
                            <TextField 
                            label={"Enter amount to withdraw"}
                            value={withdrawAmount}
                            onChange={(e) => handleInput(e)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !isNaN(parseFloat(withdrawAmount))) handleSubmit(parseFloat(withdrawAmount), user)
                            }} 
                            color="warning"
                            sx={{
                                mb:'2rem'
                            }}
                            />
                            <Button 
                            variant='contained' 
                            color='warning'
                            onClick={() => {
                                if (!isNaN(parseFloat(withdrawAmount))) handleSubmit(parseFloat(withdrawAmount), user)}
                            }
                            >Submit</Button>
                        </>
                    }
                    {step === 1 &&
                        <h2>Loading</h2>
                    }
                    {step === 2 &&
                        <>
                            <h2>Success!</h2>
                            <h2>Your withdrawal has been successfully completed</h2>
                            <span className='growSpan' />
                            <Button
                                color='warning'
                                variant='contained'
                                onClick={() => resetStep()}
                            >Make another Withdrawal</Button>
                        </>                        
                    }
                    {step > 2 &&
                        <>
                            <h2>Something went wrong!</h2>
                            <h2>Please sign out and try again</h2>
                        </>
                    }
                </Card>
            <Button onClick={() => setUser({...user, authed: false})}>Sign Out</Button>
            <Button onClick={() => setOpen(!open)}>Return to Menu</Button>
            </Dialog>
        </>
    )
}