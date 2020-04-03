import {types} from '../type'

const setFabIcon= (state = {}, { type , payload}) => {
    console.log(`recibido en reducer setFabICon, type= ${type}`)
    console.log('state en fab reducer', state)
    switch (type) {
        case 'ADD':
            return {...state, icon: types.add}
        case 'EDIT':
            return {...state, icon: types.edit};
        default:
            return {...state, icon:null};
    }

}

export default setFabIcon