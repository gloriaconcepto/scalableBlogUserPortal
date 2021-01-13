export function createEmailError(error) {
    return { type:`CREATE-EMAIL-ERROR`, error };
}

export function clearEmailError() {
    return { type:`CLEAR-EMAIL-ERROR` };
}