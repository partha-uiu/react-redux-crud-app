import React from 'react'

export default function TodoList(props) {
    return (
        <div>
            <ul><li>{props.title}</li></ul>
        </div>
    )
}
