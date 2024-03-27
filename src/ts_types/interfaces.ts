export type User = {
    account: number,
    name: string,
    amount: number,
    type: string,
    credit_limit?: number
} | null;