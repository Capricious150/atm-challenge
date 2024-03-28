import { BalancePayload } from "../ts_types/types";

export async function logIn (accNum: string) {
    try {
        const response = await fetch(`http://localhost:3000/login/${accNum}`, {
            method: 'POST'
        })
        const theGoods = await response.json();
        console.log(theGoods)
        return theGoods;
        
    } catch (err) {

    }
}

export async function updateAmount (amount: number, account: number) {
    try {
        console.log("Entered Update")
        const payload: BalancePayload = {
            account: account,
            amount: amount
        }
        const response = await fetch(`http://localhost:3000/update`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(payload)
        })
        const theGoods = await response.json() 
        console.log(theGoods)
        return theGoods
    } catch (err) {
        console.log(err)
    }
}