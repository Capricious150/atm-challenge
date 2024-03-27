import { Dialog, Button } from "@mui/material";
import { menuButton } from "../../styling/sxProps";

export default function MakeDepositModal () {

    return(
        <>
            <Button 
            sx={menuButton}    
            >
                <h2>DEPOSIT</h2>
            </Button>
        </>
    )
}