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

export async function updateAmount (amount: number) {
    
}