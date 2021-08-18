import { combineReducers } from "redux";
import contacts from "./contactsReducer"

const rootReducer = combineReducers({
    contacts,
})

export default rootReducer;