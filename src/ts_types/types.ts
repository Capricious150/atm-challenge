export type User = {
    authed: boolean,
    account?: number,
    name?: string,
    amount?: number,
    type?: string,
    credit_limit?: number,
    last_withdraw_date?: string,
    last_withdraw_sum?: number,
    server_date?: string
};

export type BalancePayload = {
    account: number,
    amount: number
}

export type ValidationResponse = {
    error: boolean,
    message?: string,
    step: number
}

export type PgPutResponse = {
    amount: string
}