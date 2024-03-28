import { useState, useEffect } from "react"
import { User, ValidationResponse } from "../ts_types/types";
import { updateAmount } from "../api/api";

export const useWithdrawal = () => {
    const [step, setStep] = useState<number>(0);

    //The withdrawalValidator function will cascade down a big if/else if/else chain, looking for any errors
    const withdrawalValidator = (amount: number, user: User): ValidationResponse => {
        if (isNaN(amount) || typeof user.amount === "undefined" || typeof user.account === "undefined" || typeof user.credit_limit === "undefined") {
            return {
                error: true,
                message: "Catastrophic error",
                step: 3
            };
        } else if (amount >= 0) {
            return {
                error: true,
                message: "Withdraw must be a negative value (How did you manage this?)",
                step: 0
            };
        } else if (amount < -200) {
            return {
                error: true,
                message: "Withdraw must be $200.00 or fewer dollars",
                step: 0
            };
        } else if ((amount * -1)%5 !== 0) {
            return {
                error: true,
                message: "Can only withdraw amounts that can be dispensed in $5 bills",
                step: 0
            }
         }else if (user.type !== "credit" && amount + user.amount < 0) {
            return {
                error: true,
                message: "Cannot overdraw account",
                step: 0
            }
        } else if (user.type === "credit" && amount + user.amount < (user.credit_limit * -1)) {
            return {
                error: true,
                message: "Maximum balance exceeded",
                step: 0
            }
        } else if (user.last_withdraw_date &&  user.last_withdraw_sum && user.last_withdraw_date === user.server_date && (amount * -1) + user.last_withdraw_sum > 400) {
            return {
                error: true,
                message: "Cannot withdraw more than $400.00 in a day",
                step: 0
            }
        } else return {
            error: false, 
            step: 1
        }
    };

    const handleWithdrawal = async (amount: number, user: User) => {
        const validation = withdrawalValidator(amount, user);
        if (validation.error === true) {
            setStep(validation.step);
            return validation;
        } else if (validation.error === false && user.amount && user.account) {

            let sum;

            //What immediately follows is a critical piece of logic which will inform the server what today's total withdrawal sum is
            //This SHOULD live in the backend, and will be moved there if my DB auth issues can be resolved
            if (user.last_withdraw_date === user.server_date && user.last_withdraw_sum) {
                sum = user.last_withdraw_sum + (amount * -1)
            } else {
                sum = (amount * -1)
            }
            
            setStep(validation.step);
            const newBalance: number = user.amount + amount
            console.log(newBalance)
            const response = await updateAmount(newBalance, user.account, sum)
            setStep(2)
            return response; 
        }
    };

    const resetStep = () => {
        setStep(0)
    };

    return {step, handleWithdrawal, resetStep}
}