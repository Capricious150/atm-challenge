import { useState } from "react"

export const useDeposit = () => {
    const [step, setStep] = useState<number>(0);

    const handleDeposit = async (amount: number) => {
        setStep(1);
        
    }
    return {step, handleDeposit}
}