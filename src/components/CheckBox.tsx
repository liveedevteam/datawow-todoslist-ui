import React, { useEffect, useState, useCallback } from 'react'
import styles from '../styles/Checkbox.module.css';
import { TaskInterface } from '@/interface';
import { useLoading } from '@/contexts/loadingContext';
import useTodos from '@/hooks/useTodos';

export default function CheckBox(props: any) {
    let {
        task,
        todos,
        setTodos
    } = props
    const [isChecked, setIsChecked] = useState(task.completed);
    const { setIsLoading } = useLoading()
    const { updateData, setUpdateData, updateTask } = useTodos()

    const handleCheckboxChange = () => {
        setIsLoading(true)
        let newIsCheck = !isChecked
        setIsChecked(newIsCheck);
        let id = task.id
        let title = task.title
        let completed = newIsCheck
        updateTask(id, title, completed)
    };

    useEffect(() => {
        if (updateData.state === "UPDATE_TASK_SUCCESS") {
            // console.log(updateData.state)
            // console.log(updateData)
            setTodos({
                ...todos,
                results: updateData.results,
                state: "UPDATE_TASK_SUCCESS"
            })
            setUpdateData({
                ...updateData,
                results: updateData.results,
                state: "STAND_BY"
            })
        }
        setIsLoading(false)
    }, [updateData.state])


    return (
        <label className={styles.customCheckbox}>
            <input
                id={task.id}
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <span className={styles.checkmark}></span>
        </label>
    )
}
