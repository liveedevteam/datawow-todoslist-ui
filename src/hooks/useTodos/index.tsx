// hooks/useTodos/index.js
import { useState, useEffect } from 'react';
import getTaskList from './getTaskList';
import createTask from './createTask';
import updateTask from './updateTask';
import deleteTask from './deleteTask';

const useTodos = () => {
    const [todos, setTodos] = useState([]);

    return {
        todos,
        setTodos,
        getTaskList: () => getTaskList(),
        createTask: () => createTask(),
        updateTask: () => updateTask(),
        deleteTask: () => deleteTask()
    };
};

export default useTodos;
