const initialState = {
    data: [
        {
            name: "Botir",
            id: "botir"
        },
        {
            name: "Oybek",
            id: "oybek",
        },
        {
            name: "Jamshid",
            id: "jamshid"
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {


        default: return state;
    }
}

export default reducer;