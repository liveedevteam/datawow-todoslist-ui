// hooks/useTodos/index.js
import { useState } from 'react';
import getTaskList from './getTaskList';
import createTask from './createTask';
import updateTask from './updateTask';
import deleteTask from './deleteTask';
import { TaskInterface } from '@/interface';

type TodoState = {
    state: string;
    status: number;
    msg: string;
    results: TaskInterface[] | null;
};

const useTodos = () => {
    const [todos, setTodos] = useState<TodoState>({ state: "STAND_BY", status: 500, msg: "", results: null });
    const [createData, setCreateData] = useState<TodoState>({ state: "STAND_BY", status: 500, msg: "", results: null })
    const [updateData, setUpdateData] = useState<TodoState>({ state: "STAND_BY", status: 500, msg: "", results: null })

    return {
        todos,
        setTodos,
        createData,
        setCreateData,
        updateData,
        setUpdateData,
        getTaskList: () => getTaskList({ todos, setTodos }),
        createTask: (title: string) => createTask({ todos, setTodos, title, createData, setCreateData }),
        updateTask: (id: string, title: string, completed: boolean) => updateTask({ todos, setTodos, id, title, completed, updateData, setUpdateData }),
        deleteTask: (id: string) => deleteTask({ todos, setTodos, id, updateData, setUpdateData })
    };
};

export default useTodos;
