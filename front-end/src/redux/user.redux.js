const initState = {
    user: 'admin',
    pwd: ''
}

const LOGIN_SUCCESS = "LOGIN_SUCCESS"

// reduce
export function user(state = initState, action) {
    switch(action.type){
        case LOGIN_SUCCESS:
            return action.payload
        default: 
            return state
    }
}

// action create
function hasLogin(data) {
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}

export function loginIn(param){
    return dispatch => {
        dispatch(hasLogin(param))
    }
}

export function register(param) {
    return dispatch => {
        dispatch(hasLogin(param))
    }
}