const initialState = {
     error: null
  };

  
export const createEmailError = (state = initialState, action) => {
   switch (action.type) {
     case `CREATE-EMAIL-ERROR`:
       return {
         ...state,
         error: action
       };
     case `CLEAR-EMAIL-ERROR`:
       return {
        
         error: null
       };
     
     default:
       return state;
   }
 };
 