import React, { useEffect, useState } from 'react'
import CheckBox from './CheckBox'
import styles from '../styles/TaskItem.module.css';
import InputText from './InputText';
import useTodos from '@/hooks/useTodos';
import { useLoading } from '@/contexts/loadingContext';

export default function TaskItem(props: any) {
    let [isDisplay, setIsDisplay] = useState(false)
    const { task, mode, todos, setTodos } = props
    let [inputValue, setInputValue] = useState(task && task.title || "")
    let {
        createTask,
        updateTask,
        deleteTask,
        createData,
        updateData,
        setCreateData,
        setUpdateData
    } = useTodos()
    let { setIsLoading } = useLoading()

    useEffect(() => {
        // console.log(todos)
        if (createData.state === "CREATE_TASK_SUCCESS") {
            // console.log(createData)
            setTodos({
                ...todos,
                results: createData.results,
                state: createData.state
            })
            setCreateData({
                ...createData,
                results: createData.results,
                state: "STAND_BY"
            })
            setInputValue("")
        } else if (updateData.state === "UPDATE_TASK_SUCCESS" || updateData.state === "DELETE_TASK_SUCCESS") {
            setTodos({
                ...todos,
                results: updateData.results,
                state: updateData.state
            })
            setUpdateData({
                ...updateData,
                results: updateData.results,
                state: "STAND_BY"
            })
            setInputValue("")
        }
        setIsLoading(false)
    }, [updateData.state, createData.state, todos.state])

    return (
        <div>
            <div className={styles.cardItem}>
                <div style={{ float: "left" }}>
                    {
                        mode === "list" && <div>
                            <CheckBox
                                task={task}
                                updateTask={updateTask}
                                updateData={updateData}
                                todos={todos}
                                setTodos={setTodos}
                            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{task.title}
                        </div>
                    }
                    {
                        mode !== "list" && <InputText task={task} todos={todos} setTodos={setTodos} inputValue={inputValue} setInputValue={setInputValue} />
                    }
                </div>
                <div
                    style={{
                        float: "right",
                        marginRight: "30px",
                        marginTop: "-3px",
                        fontSize: "15px"
                    }}
                >
                    {mode === "list" && <div onClick={() => {
                        let newIsDisplay = isDisplay
                        newIsDisplay = !newIsDisplay
                        setIsDisplay(newIsDisplay)
                    }}>
                        ...
                        {isDisplay && <div className='dropdown'>
                            <div className='dropdown-menu'>
                                <a className='dropdown-item' onClick={() => {
                                    let newTodos = [...todos.results]
                                    let index = 0
                                    for (let newTodo of newTodos) {
                                        if (task.id === newTodo.id) {
                                            // console.log(task.id)
                                            // console.log(`Before Edit: ${task.isEdit}`)
                                            newTodos[index].isEdit = !task.isEdit
                                            // console.log(`After Edit: ${newTodos[index].isEdit}`)
                                            setTodos({
                                                ...todos,
                                                results: newTodos
                                            })
                                        }
                                        index++
                                    }
                                }}>Edit</a>
                                <a className='dropdown-item' style={{ color: "#E07C7C" }}
                                    onClick={() => {
                                        setIsLoading(true)
                                        let id = task.id
                                        deleteTask(id)
                                    }}
                                >Delete</a>
                            </div>
                        </div>}
                    </div>}
                    {mode !== "list" && <div onClick={() => { }}>
                        <button style={{
                            width: "90px",
                            height: "35px",
                            marginTop: "3px",
                            border: "none",
                            borderRadius: "9999px",
                            backgroundColor: "#585292",
                            color: "white"
                        }}
                            onClick={() => {
                                if (mode === "create") {
                                    setIsLoading(true)
                                    let title = inputValue
                                    createTask(title)

                                } else if (mode === "update") {
                                    setIsLoading(true)
                                    let title = inputValue
                                    let id = task.id
                                    let completed = task.completed
                                    updateTask(id, title, completed)
                                }
                            }}
                        >
                            {mode === "create" && 'Create'}
                            {mode === "update" && 'Save'}
                        </button>
                    </div>}
                </div>
                <div style={{ clear: "left" }}></div>
                <div style={{ clear: "right" }}></div>
            </div>
        </div>
    )
}
