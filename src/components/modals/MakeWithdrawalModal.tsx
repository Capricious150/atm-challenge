import '../../styling/App.css'
import { Dialog, Button, Card, TextField } from "@mui/material";
import { menuButton, modalCard } from "../../styling/sxProps";
import { useState, useContext } from "react";
import { UserContext } from '../../context/userContext';
import { User } from '../../ts_types/types';

export default function MakeWithdrawalModal () {

    const [open, setOpen] = useState<boolean>(false)
    const [withAmount, setWithAmount] = useState<string>("")
    const {user, setUser} = useContext(UserContext)

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

                </Card>
            <Button onClick={() => setUser({...user, authed: false})}>Sign Out</Button>
            <Button onClick={() => setOpen(!open)}>Return to Menu</Button>
            </Dialog>
        </>
    )
}