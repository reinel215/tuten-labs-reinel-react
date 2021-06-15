//redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';


//reducers
import UserReducer from './user/reducer';

//config redux
const rootReducer = combineReducers({
    user: UserReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;