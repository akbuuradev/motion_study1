 const initialState = {
    todo: []
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "VALUE":
            return {...state, todo: action.payload}
        default : {
            return state
        }
    }
}