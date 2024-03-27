import { useState } from "react"
import { User } from "../ts_types/types";
import { updateAmount } from "../api/api";

export const useDeposit = () => {
    const [step, setStep] = useState<number>(0);

    const handleDeposit = async (amount: number, user: User) => {
        console.log(amount)
        console.log(typeof amount)
        if (isNaN(amount) || typeof user.amount === 'undefined' || typeof user.account === 'undefined') {
            setStep(3);
            return null;
        } else if (amount <= 0) {
            setStep(0);
            return null;
        } else{
        setStep(1);
        const newBalance: number = user.amount + amount
        const response = await updateAmount(newBalance, user.account)       
    }}
    return {step, handleDeposit}
}