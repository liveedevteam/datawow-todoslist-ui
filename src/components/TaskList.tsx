import React from 'react'
import { TaskInterface } from '@/interface';
import TaskItem from './TaskItem';

export default function TaskList(props: any) {
    let { todos, setTodos, filter } = props
    return (
        <div>
            {todos && todos.results && todos.results.map((e: TaskInterface) => {
                return (<div key={e.id}>
                    <TaskItem task={e} key={e.id} mode="list" todos={todos} setTodos={setTodos} />
                    {e.isEdit && <TaskItem task={e} mode="update" todos={todos} setTodos={setTodos} />}
                </div>)
            })}
            <TaskItem task={{}} mode="create" />
        </div>
    )
}
