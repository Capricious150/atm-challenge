import '../../styling/App.css'
import { Dialog, Button, Card } from "@mui/material";
import { menuButton } from "../../styling/sxProps";
import { useState, useContext } from "react";
import { UserContext } from '../../context/userContext';

export default function ViewBalanceModal () {

    const [open, setOpen] = useState<boolean>(false)
    const {user} = useContext(UserContext)
    return(
        <>
            <Button 
            sx={menuButton}    
            onClick={() => setOpen(!open)}
            >
                <h2>VIEW BALANCE</h2>
            </Button>

            <Dialog 
                open={open}            
            >   
                <Card
                sx={{
                    backgroundColor: 'gray'
                }}
                >
                    { user.type === 'checking' || user.type === 'savings' &&
                        <h1>Your balance is ${user.amount}</h1>
                    }
                    <Button onClick={() => setOpen(!open)}>Close</Button>
                </Card>
            </Dialog>
        </>
    )
}