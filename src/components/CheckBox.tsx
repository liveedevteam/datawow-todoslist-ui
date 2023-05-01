import React, { useState } from 'react'
import styles from '../styles/Checkbox.module.css';
import { TaskInterface } from '@/interface';

export default function CheckBox(props: any) {
    let { task } = props
    const [isChecked, setIsChecked] = useState(task.completed);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className={styles.customCheckbox}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <span className={styles.checkmark}></span>
        </label>
    )
}
