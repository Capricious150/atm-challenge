import '../../styling/App.css'
import { Dialog, Button, Card, TextField } from "@mui/material";
import { menuButton, modalCard } from "../../styling/sxProps";
import { useState, useContext } from "react";
import { UserContext } from '../../context/userContext';
import { useDeposit } from '../../hooks/useDeposit';
import { User } from '../../ts_types/types';

export default function MakeDepositModal () {
    
    const [open, setOpen] = useState<boolean>(false)
    const [depAmount, setDepAmount] = useState<string>("")
    const {user, setUser} = useContext(UserContext)
    const {step, handleDeposit, resetStep} = useDeposit();

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const validEntry_REGEX: RegExp = /^\d+(\.\d{0,2})?$/
        if (validEntry_REGEX.test(e.target.value) || e.target.value === "") {
            setDepAmount(e.target.value)
        } 
    }

    const handleSubmit = async (amount: number, user: User) => {
        const response = await handleDeposit(amount, user);
        setUser({...user, amount: response.amount})
    }

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
            {step === 0 &&
                <>
                    <h3>Make a Deposit</h3>
                    <span className='growSpan' />
                    <TextField 
                    label={"Enter amount to deposit"}
                    value={depAmount}
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
            <Button onClick={() => setUser({...user, authed: false})}>Sign Out</Button>
            <Button onClick={() => setOpen(!open)}>Return to Menu</Button>
            </Dialog>
        </>
    )
}