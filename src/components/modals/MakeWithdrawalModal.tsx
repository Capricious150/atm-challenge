import '../../styling/App.css'
import { Dialog, Button, Card, TextField } from "@mui/material";
import { menuButton, modalCard } from "../../styling/sxProps";
import { useState, useContext } from "react";
import { UserContext } from '../../context/userContext';
import { User } from '../../ts_types/types';
import { useWithdrawal } from '../../hooks/useWithdrawal';

export default function MakeWithdrawalModal () {

    const [open, setOpen] = useState<boolean>(false);
    const [withdrawAmount, setWithdrawAmount] = useState<string>("");
    const {user, setUser} = useContext(UserContext);
    const {step, handleWithdrawal, resetStep} = useWithdrawal();
    const [errorMessage, setErrorMessage] = useState<string>("")

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        const validEntry_REGEX: RegExp = /^\d+$/
        if (validEntry_REGEX.test(e.target.value) || e.target.value === "") {
            setWithdrawAmount(e.target.value)
        } 
    }

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
                            <p>{errorMessage}</p>
                            <TextField 
                            label={"Enter amount to withdraw"}
                            value={withdrawAmount}
                            onChange={(e) => handleInput(e)} 
                            color="warning"
                            sx={{
                                mb:'2rem'
                            }}
                            />
                            <Button 
                            variant='contained' 
                            color='warning'
                            onClick={() => {
                                if (!isNaN(parseFloat(withdrawAmount))) handleWithdrawal(parseFloat(withdrawAmount), user)}
                            }
                            >Submit</Button>
                        </>
                    }
                    {step === 1 &&
                        <h2>Loading</h2>
                    }
                </Card>
            <Button onClick={() => setUser({...user, authed: false})}>Sign Out</Button>
            <Button onClick={() => setOpen(!open)}>Return to Menu</Button>
            </Dialog>
        </>
    )
}