const initialState = {
    count: 1,
    aboutCount: 1,
    detail: {},
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "COUNTRY":
            return {...state, count: action.payload}
        case "ABOUT_COUNT":
            return {...state, aboutCount: action.payload}
        case "DATA" :
            return {...state,detail: action.payload}
        default : {
            return state
        }
    }
}