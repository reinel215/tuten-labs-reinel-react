//redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';


//reducers
import UserReducer from './user/reducer';
import BookingReducer from './bookings/reducer';

//config redux
const rootReducer = combineReducers({
    user: UserReducer,
    booking: BookingReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;