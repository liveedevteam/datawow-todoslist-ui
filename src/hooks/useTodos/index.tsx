// hooks/useTodos/index.js
import { useState, useEffect } from 'react';
import getTaskList from './getTaskList';
import createTask from './createTask';
import updateTask from './updateTask';
import deleteTask from './deleteTask';

const useTodos = () => {
    const [todos, setTodos] = useState({ state: "STAND_BY", status: 500, msg: "", results: null });

    return {
        todos,
        setTodos,
        getTaskList: () => getTaskList({ todos, setTodos }),
        createTask: () => createTask(),
        updateTask: () => updateTask(),
        deleteTask: () => deleteTask()
    };
};

export default useTodos;
