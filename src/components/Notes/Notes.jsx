import React from 'react'

const notes = ({notes}) => {

    // const notes = [
    //     {
    //         id: 1,
    //         content: 'HTML is easy',
    //         important: true
    //     },
    //     {
    //         id: 2,
    //         content: 'Browser can execute only JavaScript',
    //         important: false
    //     },
    //     {
    //         id: 3,
    //         content: 'GET and POST are the most important methods of HTTP protocol',
    //         important: true
    //     }
    // ]

    return (
        <>
            <h1>Notes</h1>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>{note.content}</li>
                ))}
            </ul>
        </>
    )
}

export default notes