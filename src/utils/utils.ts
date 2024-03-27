export function titleCase (str:string | undefined) {
    if (typeof str === "undefined") return ""
    const theLetters = str.split('');
    theLetters[0] = theLetters[0].toUpperCase();
    const response = theLetters.join('');
    return response;
}