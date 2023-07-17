import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Notes from './components/Notes/notes'
import noteService from './servicers/controllers'
const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState([]);

  const addNote = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }

    // setNotes(notes.concat(noteObject))
    // setNewNote('')

    noteService
      .create(noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }


  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')
  return (
    <>
      <Notes notes={notes} />
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={event => handleNoteChange(event)} />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App