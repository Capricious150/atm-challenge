import { BalancePayload, LoginError, PgPutResponse, User } from "../ts_types/types";

export async function logIn (accNum: string): Promise<User | LoginError | undefined | void> {
    try {
        const response = await fetch(`http://localhost:3000/login/${accNum}`, {
            method: 'POST'
        })
        const theGoods = await response.json();
        return theGoods;
        
    } catch (err) {
        console.log(err)
        /* Additonal catch logic if needed. Error handling also done on backend, so this function shouldn't hit this block*/
    }
}

export async function updateAmount (amount: number, account: number, sum?: number): Promise<PgPutResponse | undefined > {
    try {
        console.log("Entered Update")
        const payload: BalancePayload = {
            account: account,
            amount: amount
        }
        
        if (sum) {
            payload.sum = sum
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
        /* Additional logic here if needed (as above) */
    }
}