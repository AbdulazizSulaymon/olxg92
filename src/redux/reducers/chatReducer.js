import { SEND_MSG, TYPING } from "../types";

const initialState = {
    oybek: {
        value: "",
        data: [
            {
                me: false,
                msg: "Assalamu alaykum"
            },
            {
                me: false,
                msg: "Ertaga vaqting bormi?"
            },
            {
                me: true,
                msg: "Va alaykum assalom, soat nechida?"
            }
        ]
    },
    jamshid: {
        value: "...",
        data: [
            {
                me: true,
                msg: "Assalamu alaykum Jamshid. Ertaga Oybek bilan yig'ilmoqchimiz. Kelasanmi?"
            }
        ]
    }
}

const reducer = (state = initialState, action) => {
    let id, user;

    switch (action.type) {
        case TYPING:
            id = action.payload.id;
            user = { ...state[id] };
            user.value = action.payload.value;

            return { ...state, [id]: user };

        case SEND_MSG:
            id = action.payload.id;
            user = { ...state[id] };
            user.value = "";
            user.data = user.data || [];
            user.data.push({ me: true, msg: action.payload.msg });

            return { ...state, [id]: user };

        default: return state;
    }
}

export default reducer;