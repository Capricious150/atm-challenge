import { useState } from "react"
import { User, ValidationResponse } from "../ts_types/types";
import { updateAmount } from "../api/api";

export const useWithdrawal = () => {
    const [step, setStep] = useState<number>(0);

    const withdrawalValidator = (amount: number, user: User): ValidationResponse => {
        if (isNaN(amount) || typeof user.amount === 'undefined' || typeof user.account === 'undefined') {
            return {
                error: true,
                message: "Catastrophic error",
                step: 3
            };
        } else if (amount >= 0) {
            return {
                error: true,
                message: 'Deposit must be positive, non-zero number',
                step: 0
            };
        } else return {
            error: false, 
            step: 1
        }
    };

    const handleWithdrawal = async (amount: number, user: User) => {
        const validation = withdrawalValidator(amount, user);

    };

    const resetStep = () => {
        setStep(0)
    };

    return {step, handleWithdrawal, resetStep}
}