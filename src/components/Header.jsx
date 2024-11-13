import React from 'react'

export default function Header(props) {
    const {todos} = props
    const todoslength = todos.length

    const isTasksPlural = todos.lenth != 1

    const TaskorTasks = isTasksPlural ? 'task' : 'tasks'
    return (
        <header>
            <h1 className='text-gradient'>You Have {todoslength} Open {TaskorTasks}.</h1>
        </header>
    )
}
