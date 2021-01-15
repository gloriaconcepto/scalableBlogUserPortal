const initialState = {
    Userdata: null,
    login:false
};

export const getUserLoginsDetails = (state = initialState, action) => {
    switch (action.type) {
        case `GET-USER-DETAILS`:
            return {
                ...state,
                Userdata: action,
            };
        case `CLEAR-USER-DETAILS`:
            return {
                Userdata: null,
            };
         case `TEMPORARY-USER-DETAILS`:
                return {
                    Userdata: null,
                    login:true
                };
        default:
            return state;
    }
};
