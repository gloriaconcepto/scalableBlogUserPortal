import { combineReducers } from "redux";
import {createEmailError} from '../src/firebase/reducers/createEmail.reducers';
import {getUserLoginsDetails} from '../src/components/usersData/reducers/users.reducers'

export default combineReducers({
    createEmailError,
    getUserLoginsDetails
})