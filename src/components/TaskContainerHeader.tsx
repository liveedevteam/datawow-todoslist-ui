import React from 'react'
import FilterSelection from './FilterSelection'

let filterOptions = [
    {
        text: "All",
        value: ""
    },
    {
        text: "Done",
        value: "TRUE"
    },
    {
        text: "Undone",
        value: "FALSE"
    }
]

export default function TaskContainerHeader(props: any) {
    let {
        todos,
        filter,
        setFilter
    } = props
    return (
        <div>
            <h1 style={{ float: "left" }}>Task</h1>
            <div style={{ float: "right" }}>
                <FilterSelection items={filterOptions} />
            </div>
            <div style={{ clear: "left" }}></div>
            <div style={{ clear: "right" }}></div>
        </div>
    )
}
