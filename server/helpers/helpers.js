//This was meant to allow me to quickly break up different types of errors. However I ultimately only ever got the one type of error"
export function handleError(str) {
    if (str === "28P01") {
        return "Authentication Error";
    } else {
        return "Unknown Error";
    };
};

//Gets the current date and returns it as a string in format 'mm/dd/yyyy'
export function getFormattedDate () {
    const date = new Date();
    let day = date.getDate().toString();
    if (day.length === 1) day = `0${day}`;
    let month = (date.getMonth() +1).toString();
    if (month.length === 1) month = `0${month}`;
    let year = date.getFullYear().toString();
    return `${month}/${day}/${year}`;
};

//Throughout development, I've been unable to authenticate into the Docker Container from my OS.
//Because of this, I needed to create a simple function which would return default values during database actions to simulate responses
export function simulateLogin(accNum) {
    const simulatedResponses = {
        1: {
            account: 1,
            name: 'Johns Checking',
            amount: 1000.00,
            type: "checking",
            credit_limit: 0,
            last_withdraw_date: '03/21/2024',
            last_withdraw_sum: 400,
            server_date: getFormattedDate()
        },
        2: {
            account:2,
            name:'Janes Savings',
            amount:2000.00,
            type:'savings',
            credit_limit:0,
            last_withdraw_date:'03/28/2024',
            last_withdraw_sum: 300,
            server_date: getFormattedDate()
        },
        3: {
            account:3,
            name:'Jills Credit',
            amount:-3000.00,
            type:'credit',
            credit_limit:10000,
            last_withdraw_date:'11/11/2019',
            last_withdraw_sum: 200,
            server_date: getFormattedDate()
        },
        4: {
            account: 4,
            name:'Bobs Checking',
            amount:40000.00,
            type:'checking',
            credit_limit:0,
            last_withdraw_date:'12/14/2023',
            last_withdraw_sum:100,
            server_date: getFormattedDate()
        },
        5: {
            account:5,
            name:'Bills Savings',
            amount:50000.00,
            type:'savings',
            credit_limit:0,
            last_withdraw_date:'03/27/2024',
            last_withdraw_sum:400,
            server_date: getFormattedDate()
        },
        6: {
            account:6,
            name:'Bills Credit',
            amount:-60000.00,
            type:'credit',
            credit_limit:60000,
            last_withdraw_date:'03/26/2024',
            last_withdraw_sum:400,
            server_date: getFormattedDate()
        },
        7: {
            account:7,
            name:'Nancy Checking',
            amount:70000.00,
            type:'checking',
            credit_limit:0,
            last_withdraw_date:'03/26/2024',
            last_withdraw_sum:300,
            server_date: getFormattedDate()
        },
        8: {
            account:8,
            name:'Nancy Savings',
            amount:80000.00,
            type:'savings',
            credit_limit:0,
            last_withdraw_date:'03/27/2024',
            last_withdraw_sum:300,
            server_date: getFormattedDate()
        },
        9: {
            account:9,
            name:'Nancy Credit',
            amount:-90000.00,
            type:'credit',
            credit_limit:100000,
            last_withdraw_date:'01/01/2024',
            last_withdraw_sum:200,
            server_date: getFormattedDate()
        },
        10: {
            account: 10,
            name: 'Todds Checking',
            amount: 400.00,
            type: "checking",
            credit_limit: 0,
            last_withdraw_date: '04/01/2024',
            last_withdraw_sum: 200,
            server_date: getFormattedDate()
        },
        11 : {
            account: 11,
            name: 'Todds Credit',
            amount: -8800.00,
            type: 'credit',
            credit_limit: 9000,
            last_withdraw_date: '03/25/2024',
            last_withdraw_sum: 300,
            server_date: getFormattedDate()
        },
        12: {
            account: 12,
            name: 'Borfs Checking',
            amount: 100.00,
            type: 'checking',
            credit_limit: 0,
            last_withdraw_date: '03/25/2024',
            last_withdraw_sum: 300,
            server_date: getFormattedDate()
        }
    };

    if (Object.keys(simulatedResponses).indexOf(accNum) !== -1) {
        return simulatedResponses[accNum]
    } else {
        return {
            "error": "Not Found"
        }
    };

};

export function simulatePut(account, amount, sum) {
    if (!sum) return {amount: amount};
    else return {amount: amount, last_withdraw_date: getFormattedDate(), last_withdraw_sum: sum};
};