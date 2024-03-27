import '../../styling/App.css'
import { Dialog, Button, Card } from "@mui/material";
import { menuButton, modalCard } from "../../styling/sxProps";
import { useState, useContext } from "react";
import { UserContext } from '../../context/userContext';

export default function ViewBalanceModal () {

    const [open, setOpen] = useState<boolean>(false)
    const {user, setUser} = useContext(UserContext)
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
                sx={modalCard}
                >
                    { (user.type === 'checking' || user.type === 'savings') &&
                        <h2>Account Balance: ${user.amount}</h2>
                    }
                    {  user.type === 'credit' &&
                        <>
                            <h2>Account Balance: ${(parseInt(user.amount) * -1).toString()}</h2>
                            <h2>Credit Limit: ${user.credit_limit}</h2>
                        </>
                    }
                </Card>
                <Button onClick={() => setUser({...user, authed: false})}>Sign Out</Button>
                <Button onClick={() => setOpen(!open)}>Return to Menu</Button>
            </Dialog>
        </>
    )
}