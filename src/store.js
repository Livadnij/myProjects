import thunk from "redux-thunk"
import { configureStore,combineReducers,applyMiddleware } from "@reduxjs/toolkit";
import TodoReducer from './reducers/TodoReducers' 

const reducer = combineReducers({
    Todo:TodoReducer,
});

const initialState = {};

export const store = configureStore({
    reducer: reducer,
    initialState,
    applyMiddleware: [thunk]
});
