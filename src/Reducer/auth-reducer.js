export const authReducer = (state, action) => {
    switch (action.type) {
        case "EMAIL":
            return {
                ...state,
                ...state.email,
                email: action.payload
            }
        case "PASS":
            return {
                ...state,
                ...state.password,
                password: action.payload
            }
        case "FNAME":
            return {
                ...state,
                ...state.fname,
                fname: action.payload
            }
        case "LNAME":
            return {
                ...state,
                ...state.lanme,
                lanme: action.payload
            }
        case "GUEST-CRED":
            return {
                ...state,
                email: "adarshbalika@gmail.com",
                password: "adarshBalika123",
            }
        default:
            return {
                ...state
            }
    }
}