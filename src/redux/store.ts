import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducer';
import thunk from 'redux-thunk';


const middleware = [thunk];

export const store = configureStore({
    reducer: userReducer,
    middleware: middleware
});


