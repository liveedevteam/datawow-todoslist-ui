// hooks/useTodos/index.js
import { useState, useEffect } from 'react';
import getTaskList from './getTaskList';
import createTask from './createTask';
import updateTask from './updateTask';
import deleteTask from './deleteTask';

const useTodos = () => {
    const [todos, setTodos] = useState({ state: "STAND_BY", status: 500, msg: "", results: null });
    const [createData, setCreateData] = useState({ state: "STAND_BY", status: 500, msg: "", results: null })
    const [updateData, setUpdateData] = useState({ state: "STAND_BY", status: 500, msg: "", results: null })

    return {
        todos,
        setTodos,
        createData,
        setCreateData,
        updateData,
        setUpdateData,
        getTaskList: () => getTaskList({ todos, setTodos }),
        createTask: (title: string) => createTask({ todos, setTodos, title, createData, setCreateData }),
        updateTask: (id: string, title: string) => updateTask({ todos, setTodos, id, title, updateData, setUpdateData }),
        deleteTask: () => deleteTask()
    };
};

export default useTodos;
