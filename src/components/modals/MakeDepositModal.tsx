import '../../styling/App.css';
import { Dialog, Button, Card, TextField } from "@mui/material";
import { menuButton, modalCard } from "../../styling/sxProps";
import { useState, useContext } from "react";
import { UserContext } from '../../context/userContext';
import { useDeposit } from '../../hooks/useDeposit';
import { User } from '../../ts_types/types';
import { typeGuardPgResponse, typeGuardValidationResponse } from '../../utils/utils';


//This is a typical example of one of the modals used in this project.
//It returns a button, the Dialog, and uses a custom hook to manage its state and api calls
export default function MakeDepositModal () {
    
    const [open, setOpen] = useState<boolean>(false);
    const [depAmount, setDepAmount] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const {user, setUser} = useContext(UserContext);
    const {step, handleDeposit, resetStep} = useDeposit();
    
    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        //Regex will test to fit format '0000.00', '0000.' or '0000' 
        //(The 0's could be any number)
        const validEntry_REGEX: RegExp = /^\d+(\.\d{0,2})?$/;
        if (validEntry_REGEX.test(e.target.value) || e.target.value === "") {
            setDepAmount(e.target.value);
        } 
    };

    const handleSubmit = async (amount: number, user: User): Promise<void> => {
        setErrorMessage("");
        const response = await handleDeposit(amount, user);
        if (response === null) return;
        if (response && typeGuardValidationResponse(response) && response.message) {
            setErrorMessage(response.message);
        }
        else if (response && typeGuardPgResponse(response) && !isNaN(parseFloat(response.amount))) {
            setDepAmount("");
            setUser({...user, amount: parseFloat(response.amount)});
        }
    };

    return(
        <>
            <Button 
            sx={menuButton}
            onClick={() => setOpen(!open)}    
            >
                <h2>DEPOSIT</h2>
            </Button>
            
            <Dialog 
                open={open}            
            >   
            <Card
            sx={modalCard}
            > 
                {/* "Step" state variable manages what is displayed within the modal, is controlled by useDeposit custom hook */}  
                {step === 0 &&
                    <>
                        <h3>Make a Deposit</h3>
                        <span className='growSpan' />
                        <p className='errorText'>{errorMessage}</p>
                        <TextField 
                        label={"Enter amount to deposit"}
                        value={depAmount}
                        onChange={(e) => handleInput(e)} 
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !isNaN(parseFloat(depAmount))) handleSubmit(parseFloat(depAmount), user)
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
                            if (!isNaN(parseFloat(depAmount))) handleSubmit(parseFloat(depAmount), user)}
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
                        <h2>Your deposit has been successfully completed</h2>
                        <span className='growSpan' />
                        <Button
                            color='warning'
                            variant='contained'
                            onClick={() => resetStep()}
                        >Make another Deposit</Button>
                    </>
                }
                {step > 2 &&
                    <>
                        <h2>Something went wrong!</h2>
                        <h2>Please sign out and try again</h2>
                    </>
                }
            </Card>
            {/* Below, only setting "authed" to false, rather than clearing state, to maintain data between a logout/in as the same user. 
            This is because, due to authentication issues, I can't update the actual DB, so I need to use some illusions to simulate database persistance*/}
            <Button onClick={() => setUser({...user, authed: false})}>Sign Out</Button>
            <Button onClick={() => setOpen(!open)}>Return to Menu</Button>
            </Dialog>
        </>
    )
}