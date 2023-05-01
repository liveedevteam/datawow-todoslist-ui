import React, { useState } from 'react'

export default function InputText(props: any) {
    let { mode, inputValue, setInputValue } = props
    let text = ""
    if (mode === "create") text = "Add your todo"
    else text = "Save"
    return (
        <input
            type="text"
            placeholder="Add your todo"
            style={{
                marginLeft: "3px",
                marginTop: "7px"
            }}
            value={inputValue}
            onChange={(e) => {
                let value = e.target.value
                setInputValue(value)
            }}
        />
    )
}
