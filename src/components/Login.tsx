import { TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { logIn } from "../api/api";
import { User } from "../ts_types/types";
import { menuButtonSmall } from "../styling/sxProps";
import { typeGuardUser } from "../utils/utils";

export default function Login () {

    const {user, setUser} = useContext(UserContext);
    const [accountNum, setAccountNum] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");


    //Only accept numeric characters into input using Regex.
    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const validEntry_REGEX: RegExp = /^\d+$/
        if (validEntry_REGEX.test(e.target.value) || e.target.value === "") {
            setAccountNum(e.target.value);
        }
    };

    const handleLogIn = async () => {
        if (errorMessage) setErrorMessage("Account Number");
        if ((isNaN(parseInt(accountNum))) || parseInt(accountNum) <= 0){
            return "error";
        };
        if (user.account && user.account === parseInt(accountNum)){
            //This is part of the simulated backend behavior.
            //If a user signs out, and immediately signs back in as the same user in this mockup
            //Only the authed value with be toggled, rather than a fresh login,
            //So that some values can be stored in Context that I can't currently store in the DB.
            //This will change if my authentication issues are resolved
            setUser({...user, authed: true});
        } else {
            try {
                const reply = await logIn(accountNum);
                if (reply && typeGuardUser(reply)) {
                    const user:User = {
                        authed: true,
                        account: reply.account,
                        name: reply.name,
                        amount: reply.amount,
                        type: reply.type,
                        credit_limit: reply.credit_limit,
                        last_withdraw_date: reply.last_withdraw_date,
                        last_withdraw_sum: reply.last_withdraw_sum,
                        server_date: reply.server_date
                    };

                    setUser(user);
                } else if (reply && 'error' in reply) {
                    setErrorMessage("Account Not Found!");
                };
            }
            catch(err){
                console.log(err)
                /* Catch Logic Here if Needed */
            }};
    }

    return (
        <>
            <h2>Welcome!</h2>
            <h2>Please enter your account number</h2>
            <div className="container">
                {errorMessage === "" && 
                    <section id="loginField">
                        <TextField 
                            label={"Account Number"}
                            onChange={(e) => handleInput(e)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleLogIn()
                            }}
                        value={accountNum}
                        color="warning"
                        variant="standard"
                        sx={{
                            m: '0.25rem'
                        }}
                        />
                        <br />
                        <Button 
                            fullWidth
                            onClick={() => handleLogIn()}
                            >Sign In</Button>
                    </section>
                }
                {/* If an error message exists, display it, and require confirmation before proceeding */}
                {errorMessage &&
                    <section id="loginFieldNoBg">
                        <h2>No account with that ID found, please try again</h2>
                        <Button
                        sx = {
                            menuButtonSmall
                        }
                         onClick={() => {
                            setAccountNum("")
                            setErrorMessage("")
                         }}
                        >
                            OK
                        </Button>
                    </section>
                }
            </div>
        </>
    )
}