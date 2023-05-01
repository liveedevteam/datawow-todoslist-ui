import React, { useState } from 'react'
import TaskContainerHeader from './TaskContainerHeader'
import TaskList from './TaskList'

export default function TaskContainer(props: any) {
    let [filter, setFilter] = useState("")
    let { todos, setTodos } = props
    return (
        <>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-12 col-sm-12 col-md-6'>
                        <TaskContainerHeader todos={todos} filter={filter} setFilter={setFilter} />
                        <TaskList todos={todos} filter={filter} setTodos={setTodos}/>
                    </div>
                </div>
            </div>
        </>
    )
}
