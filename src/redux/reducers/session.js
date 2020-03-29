//
const session= (state = {}, { type, payload }) => {
    //console.log(`recibido en reducer items, type= ${type}`)
    switch (type) {
        case 'login':
            state.user = payload;
            return state
        case 'logout':
            state.user = null;
            return state;
        default:
            return state;
    }

}

export default session