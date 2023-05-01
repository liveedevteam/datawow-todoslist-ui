import React, { useEffect, useState } from 'react'
import styles from '../styles/ProgressBar.module.css';
import { TaskInterface } from '@/interface';

export default function ProgressBar(props: any) {
    let [progress, setProgress] = useState(0)
    let [completeTaskCounter, setCompleteTaskCounter] = useState(0)
    let { todos, setTodos } = props

    const progressCard: React.CSSProperties = {
        backgroundColor: '#E07C7C',
        padding: "3px 15px 15px 25px",
        borderRadius: "20px",
        marginTop: "55px"
    }

    const colorHeader: React.CSSProperties = {
        color: 'white'
    }

    const colorText: React.CSSProperties = {
        color: '#EBB9B8'
    }

    const calculateProgressPercent = (data: []) => {
        let taskLength = data.length
        let taskFinish = data.filter((e: TaskInterface) => e.completed).length
        setCompleteTaskCounter(taskFinish)
        setProgress((taskFinish / taskLength) * 100)
        setTodos({
            ...todos,
            state: "STAND_BY"
        })
    }

    useEffect(() => {
        // console.log(todos)
        if (todos.state === "GET_TASKLIST_SUCCESS" || todos.state === "UPDATE_TASK_SUCCESS" || todos.state ===  "DELETE_TASK_SUCCESS" || todos.state === "CREATE_TASK_SUCCESS") {
            calculateProgressPercent(todos.results)
        }
    }, [todos.state])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-12 col-sm-12 col-md-6'>
                    <div style={progressCard}>
                        <h1 style={colorHeader}>Progress</h1>
                        <div className={styles.progressBarContainer}>
                            <div className={styles.progressBar} style={{ width: `${progress}%` }} />
                        </div>
                        {
                            <p style={colorText}>{completeTaskCounter} completed</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
