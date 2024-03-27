import { TextField, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { logIn } from "../api/api";
import { User } from "../ts_types/types";

export default function Login () {

    const {user, setUser} = useContext(UserContext);
    const [accountNum, setAccountNum] = useState<string>("");

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const validEntry_REGEX: RegExp = /^\d+$/
        if (validEntry_REGEX.test(e.target.value) || e.target.value === "") {
            setAccountNum(e.target.value)
        }
    }

    const handleLogIn = async () => {
        if ((isNaN(parseInt(accountNum))) || parseInt(accountNum) <= 0){
            return "error"
        }

        if (user.account && user.account === parseInt(accountNum)){
            setUser({...user, authed: true})
        } else {
            try {
                const reply = await logIn(accountNum);
                if (reply.type) {
                    const user:User = {
                        authed: true,
                        account: reply.num,
                        name: reply.name,
                        amount: reply.amount,
                        type: reply.type,
                        credit_limit: reply.credit_limit,
                        last_withdraw_date: reply.last_withdraw_date,
                        last_withdraw_sum: reply.last_withdraw_sum,
                        server_date: reply.server_date
                    }

                    setUser(user);
                }
            }
            catch(err){

            }}
    }

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <>
            <h2>Welcome!</h2>
            <h2>Please enter your account number</h2>
            <div className="container">
                <section id="loginField">
                    <TextField 
                        label={"Account Number"}
                        onChange={(e) => handleInput(e)}
                        value={accountNum}
                    />
                    <br/>
                    <Button 
                        fullWidth
                        onClick={() => handleLogIn()}
                    >Sign In</Button>        
                </section>
            </div>
        </>
    )
}