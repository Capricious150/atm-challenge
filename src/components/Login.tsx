import { TextField, Button } from "@mui/material";
import { useState } from "react";

export default function Login () {

    const [accountNum, setAccountNum] = useState<string>("");

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const validEntry_REGEX: RegExp = /^\d+$/
        if (validEntry_REGEX.test(e.target.value) || e.target.value === "") {
            setAccountNum(e.target.value)
        } else {
            console.log('fail')
        }
    }

    return (
        <div className="container">
            <section id="loginField">
                <TextField 
                    label={"Account Number"}
                    onChange={(e) => handleInput(e)}
                    value={accountNum}
                />
                <br/>
                <Button fullWidth>Sign In</Button>        
            </section>
        </div>
    )
}