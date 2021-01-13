const initialState = {
    Userdata: null,
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

        default:
            return state;
    }
};
