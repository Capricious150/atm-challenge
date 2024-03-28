import { User, LoginError, PgPutResponse, ValidationResponse } from "../ts_types/types";

export function titleCase (str:string | undefined) {
    if (typeof str === "undefined") return ""
    const theLetters = str.split('');
    theLetters[0] = theLetters[0].toUpperCase();
    const response = theLetters.join('');
    return response;
}

export function handleCoinage (num: number) {
    console.log(num.toFixed(2))
    return num.toFixed(2)
}

export function typeGuardUser (obj: User | LoginError): obj is User {
    return (obj as User).type !== undefined;
}


export function typeGuardPgResponse (obj: PgPutResponse | ValidationResponse): obj is PgPutResponse {
    return (obj as PgPutResponse).amount !== undefined;
}

export function typeGuardValidationResponse(obj: PgPutResponse | ValidationResponse): obj is ValidationResponse {
    return (obj as ValidationResponse).error !== undefined;
}