export function getUserDetails(data){
    return {type:`GET-USER-DETAILS`,data};
}
export function clearUserDetails(){
    return {type:`CLEAR-USER-DETAILS`};
}