import React, { useEffect } from 'react';
import TodoItem from './ToDoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/slice';

const TodoList = () => {
	
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

	
	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;