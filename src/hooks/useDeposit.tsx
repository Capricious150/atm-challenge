import { useState } from "react"
import { PgPutResponse, User, ValidationResponse } from "../ts_types/types";
import { updateAmount } from "../api/api";

export const useDeposit = () => {
    const [step, setStep] = useState<number>(0);

    const depositValidator = (amount: number, user: User): ValidationResponse => {
        if (isNaN(amount) || typeof user.amount === 'undefined' || typeof user.account === 'undefined') {
            return {
                error: true,
                message: "Catastrophic error",
                step: 3
            };
        } else if (amount <= 0) {
            return {
                error: true,
                message: 'Deposit must be positive, non-zero number',
                step: 0
            };
        } else if (amount > 1000) {
            return {
                error: true,
                message: 'Maximum Deposit Amount is 1000',
                step: 0
            }; 
        } else if (user.type === 'credit' && amount + user.amount > 0){
            return {
                error: true,
                message: 'Credit account cannot exceed positive 0 balance',
                step: 0
            }
        } else return {
            error: false,
            step: 1
        }
            
    }

    const handleDeposit = async (amount: number, user: User): Promise<ValidationResponse | PgPutResponse | undefined> => {

        const validation: ValidationResponse = depositValidator(amount, user);
        if (validation.error === true) {
            setStep(validation.step)
            return validation;
        } else if (validation.error === false && user.amount && user.account) {
            setStep(validation.step);
            const newBalance: number = user.amount + amount;
            console.log(newBalance)
            const response = await updateAmount(newBalance, user.account); 
            setStep(2);
            return response;      
        }
    }

    const resetStep = (): void => {
        setStep(0);
    }

    return {step, handleDeposit, resetStep}
}