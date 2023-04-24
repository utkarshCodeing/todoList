import React from 'react'

export default function ToDoLists(props) {
    return (
        <>
            <div className="todo_style">
            <i className='fa fa-times-circle'
                onClick={()=>{
                    props.onSelect(props.id)
                }}
            />
            <li> {props.text} </li>
            </div>
        </>
    )
}
