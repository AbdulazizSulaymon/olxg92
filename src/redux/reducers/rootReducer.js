import { combineReducers } from "redux";
import contacts from "./contactsReducer"
import chat from "./chatReducer";

const rootReducer = combineReducers({
    contacts,
    chat
})

export default rootReducer;