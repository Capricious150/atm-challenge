import { ReactNode } from "react";

export type User = {
    account: number,
    name: string,
    amount: number,
    type: string,
    credit_limit?: number
} | null;

export type ChildProps = {
    children: ReactNode
}