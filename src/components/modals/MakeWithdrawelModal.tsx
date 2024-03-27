import { Dialog, Button } from "@mui/material";
import { menuButton } from "../../styling/sxProps";

export default function MakeWithdrawelModal () {

    return(
        <>
            <Button 
            sx={menuButton}    
            >
                <h2>WITHDRAW</h2>
            </Button>
        </>
    )
}