const initState = {
    user: 'admin',
    pwd: ''
}

const AUTH_SUCCESS = "AUTH_SUCCESS"
const ERROR_MSG = "ERROR_MSG"
const LOAD_DATA = "LOAD_DATA"
const LOGOUT = "LOGOUT"

const OK = "OK"

// reduce
export function user(state = initState, action) {
    switch(action.type){
        case OK:
            return state
        default: 
            return state
    }
}

// action create
function hasName(data) {
    return {
        type: "OK",
        payload: data
    }
}

export function login({name, pwd}) {
    hasName({name, pwd})
}