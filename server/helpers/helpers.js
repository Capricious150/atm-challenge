export function handleError(str) {
    if (str === "28P01") {
        return "Authentication Error"
    } else {
        return "Unknown Error"
    }
}

export function getFormattedDate () {
    const date = new Date();
    let day = date.getDate().toString();
    if (day.length === 1) day = `0${day}`;
    let month = date.getMonth().toString();
    if (month.length === 1) month = `0${month}`;
    let year = date.getFullYear().toString();
    return `${month}/${day}/${year}`;
}

export function simulateLogin(accNum) {

    const simulatedResponses = {
        1: {
            num: 1,
            name: 'Johns Checking',
            amount: 1000,
            type: "checking",
            credit_limit: 0,
            last_withdraw_date: '3/21/2024',
            last_withdraw_sum: 400,
            server_date: getFormattedDate()
        },
        2: {
            num:2,
            name:'Janes Savings',
            amount:2000,
            type:'savings',
            credit_limit:0,
            last_withdraw_date:'3/26/2024',
            last_withdraw_sum: 300,
            server_date: getFormattedDate()
        },
        3: {
            num:3,
            name:'Jills Credit',
            amount:-3000,
            type:'credit',
            credit_limit:10000,
            last_withdraw_date:'11/11/2019',
            last_withdraw_sum: 200,
            server_date: getFormattedDate()
        },
        4: {
            num: 4,
            name:'Bobs Checking',
            amount:40000,
            type:'checking',
            credit_limit:0,
            last_withdraw_date:'12/14/2023',
            last_withdraw_sum:100,
            server_date: getFormattedDate()
        },
        5: {
            num:5,
            name:'Bills Savings',
            amount:50000,
            type:'savings',
            credit_limit:0,
            last_withdraw_date:'3/27/2024',
            last_withdraw_sum:400,
            server_date: getFormattedDate()
        },
        6: {
            num:6,
            name:'Bills Credit',
            amount:-60000,
            type:'credit',
            credit_limit:60000,
            last_withdraw_date:'3/26/2024',
            last_withdraw_sum:400,
            server_date: getFormattedDate()
        },
        7: {
            num:7,
            name:'Nancy Checking',
            amount:70000,
            type:'checking',
            credit_limit:0,
            last_withdraw_date:'3/26/2024',
            last_withdraw_sum:300,
            server_date: getFormattedDate()
        },
        8: {
            num:8,
            name:'Nancy Savings',
            amount:80000,
            type:'savings',
            credit_limit:0,
            last_withdraw_date:'3/27/2024',
            last_withdraw_sum:300,
            server_date: getFormattedDate()
        },
        9: {
            num:9,
            name:'Nancy Credit',
            amount:-90000,
            type:'credit',
            credit_limit:100000,
            last_withdraw_date:'01/01/2024',
            last_withdraw_sum:200,
            server_date: getFormattedDate()
        },
    }

    if (Object.keys(simulatedResponses).indexOf(accNum) !== -1) {
        return simulatedResponses[accNum]
    } else {
        return {
            "Error": "Not Found"
        }
    }

}

export function simulatePut(account, amount) {
    return {amount: amount}
}