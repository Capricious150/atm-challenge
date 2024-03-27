export type User = {
    authed: boolean,
    account?: number,
    name?: string,
    amount?: number,
    type?: string,
    credit_limit?: number,
    last_withdraw_date?: string,
    last_withdraw_sum?: number
};