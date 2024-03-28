import '../../styling/App.css'
import { Dialog, Button, Card } from "@mui/material";
import { menuButton, modalCard } from "../../styling/sxProps";
import { useState, useContext } from "react";
import { UserContext } from '../../context/userContext';
import { handleCoinage } from '../../utils/utils';

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
                    { ((user.type === 'checking' || user.type === 'savings') && typeof user.amount !== "undefined") &&
                        <h2>Account Balance: ${handleCoinage(parseFloat(user.amount))}</h2>
                    }
                    {  (user.type === 'credit' && typeof user.amount !== "undefined" ) &&
                        <>
                            <h2>Account Balance: ${handleCoinage(parseFloat(user.amount) * -1).toString()}</h2>
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