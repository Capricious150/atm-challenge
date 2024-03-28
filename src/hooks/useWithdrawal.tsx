import { useState } from "react"
import { User } from "../ts_types/types";
import { updateAmount } from "../api/api";

export const useWithdrawal = () => {
    const [step, setStep] = useState<number>(0);

    const validator = (amount: number, user: User) => {


        if (
            amount > 200 ||
            (user.last_withdraw_date === user.server_date && amount + user.last_withdraw_sum > 400)
        )



        return true
    };

    const handleWithdrawal = async (amount: number, user: User) => {
        if (isNaN(amount) || typeof user.amount === 'undefined' || typeof user.account === 'undefined') {
            setStep(3);
            return null;
        } else if (amount >= 0) {
            setStep(0);
            return null;
        } else if (validator(amount, user) === false) {

        } else {
            setStep(1);
            const newBalance: number = user.amount + amount;
        }

    };

    const resetStep = () => {
        setStep(0)
    };

    return {step, handleWithdrawal, resetStep}
}