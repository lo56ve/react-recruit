// state 
const initState = {
    user: 'admin',
    pwd: '',
    position: ''
}

const LOGIN_SUCCESS = "LOGIN_SUCCESS"

// reduce 指定了应用状态的变化如何相应actions并发送到store的，记住actions只是描述了‘有事情发生了’这一事实，并没有描述应用如何更新state
export function user(state = initState, action) {
    switch(action.type){
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                user: action.user,
                pwd: action.pwd,
                position: action.position
            })
        default: 
            return state
    }
}

// action 把数据从应用传到store的有效载荷，它histore数据的唯一来源，一般通过store.dispatch()将action传到store
export const loginIn = param => {
    let {user, pwd, position} = param
    return {
        type: 'LOGIN_SUCCESS',
        user,
        pwd,
        position
    }
}
