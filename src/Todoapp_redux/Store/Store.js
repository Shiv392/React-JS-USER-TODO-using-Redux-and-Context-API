import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Slice/TodoSlice.js';

export const store=configureStore({
    reducer:{
        todo:todoReducer
    }
})