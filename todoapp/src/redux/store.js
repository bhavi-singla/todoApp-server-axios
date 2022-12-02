import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slice';

export default configureStore({
	reducer: {
		todos: todoReducer,
	},
});