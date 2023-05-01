import React, { useEffect, useState } from 'react'
import CheckBox from './CheckBox'
import styles from '../styles/TaskItem.module.css';
import InputText from './InputText';

export default function TaskItem(props: any) {
    let [isDisplay, setIsDisplay] = useState(false)
    const { task, mode, todos, setTodos } = props
    let [inputValue, setInputValue] = useState(task && task.title || "")

    return (
        <div>
            <div className={styles.cardItem}>
                <div style={{ float: "left" }}>
                    {
                        mode === "list" && <div>
                            <CheckBox task={task} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{task.title}
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
                                            console.log(task.id)
                                            console.log(`Before Edit: ${task.isEdit}`)
                                            newTodos[index].isEdit = !task.isEdit
                                            console.log(`After Edit: ${newTodos[index].isEdit}`)
                                            setTodos({
                                                ...todos,
                                                results: newTodos
                                            })
                                        }
                                        index++
                                    }
                                }}>Edit</a>
                                <a className='dropdown-item' style={{ color: "#E07C7C" }}>Delete</a>
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
                        }}>
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
