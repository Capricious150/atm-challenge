import '../../styling/App.css'
import { Dialog, Button, Card, TextField } from "@mui/material";
import { menuButton, modalCard } from "../../styling/sxProps";
import { useState, useContext } from "react";
import { UserContext } from '../../context/userContext';

export default function MakeDepositModal () {
    
    const [open, setOpen] = useState<boolean>(false)
    const [depAmount, setDepAmount] = useState<string>("")
    const {user, setUser} = useContext(UserContext)

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const validEntry_REGEX: RegExp = /^\d+(\.\d{0,2})?$/
        if (validEntry_REGEX.test(e.target.value) || e.target.value === "") {
            setDepAmount(e.target.value)
        } 
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
                    <Button variant='contained' color='warning'>Submit</Button>
                </Card>
                <Button onClick={() => setUser({...user, authed: false})}>Sign Out</Button>
                <Button onClick={() => setOpen(!open)}>Return to Menu</Button>
            </Dialog>
        </>
    )
}