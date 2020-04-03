//
const session= (state = {}, { type, payload }) => {
    console.log(`recibido en reducer items, type= ${type}`)
    console.log('state en session reducer', state)

    switch (type) {
        case 'login':
            return {...state, user:payload}
        case 'logout':
            return {...state, user: null};
        default:
            return state;
    }

}

export default session