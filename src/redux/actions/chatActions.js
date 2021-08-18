import { dispatch } from "../store"
import { SEND_MSG, TYPING } from "../types"

export const sendMsg = (msg = "", id = "") => {
    dispatch({ type: SEND_MSG, payload: { msg: msg.trim(), id } })
}

export const typing = (value = "", id = "") => {
    dispatch({ type: TYPING, payload: { value, id } })
}