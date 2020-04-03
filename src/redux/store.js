import {createStore, combineReducers} from 'redux'
import session from './reducers/session'
import fabIcon from './reducers/fab'

const reducer = combineReducers({
    session, fabIcon
});
const store = createStore(reducer)
export default store