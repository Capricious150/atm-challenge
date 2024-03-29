import { User, LoginError, PgPutResponse, ValidationResponse } from "../ts_types/types";

//Performs the same function as string.Title() method from other languages
export function titleCase (str:string | undefined) {
    if (typeof str === "undefined") return "";
    const theLetters = str.split('');
    theLetters[0] = theLetters[0].toUpperCase();
    const response = theLetters.join('');
    return response;
};

//Makes a number have coinage
export function handleCoinage (num: number) {
    return num.toFixed(2);
};

//Below are a series of Type Guards to ensure that functions which could (theoretically) receive more than 1 plausible type of object are actually getting the intended type of object
export function typeGuardUser (obj: User | LoginError): obj is User {
    return (obj as User).type !== undefined;
};

export function typeGuardPgResponse (obj: PgPutResponse | ValidationResponse): obj is PgPutResponse {
    return (obj as PgPutResponse).amount !== undefined;
};

export function typeGuardValidationResponse(obj: PgPutResponse | ValidationResponse): obj is ValidationResponse {
    return (obj as ValidationResponse).error !== undefined;
};