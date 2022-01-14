import React, { useState } from 'react';

function AddNote() {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });
    const [newNotes, setNewNotes] = useState([]);
    function createNote(e) {
        const { name, value } = e.target;
        setNewNote((prev) => {
            if (name === "title") {
                return {
                    title: value,
                    content: prev.content
                }
            }
            else if (name === "content") {
                return {
                    title: prev.title,
                    content: value
                }
            }
        });
    }
    function addNewNotes(e) {
        setNewNotes((prev) => {
            return [...prev, newNote];
        });
        e.preventDefault();

    }
    console.log(newNotes)
    return (<div className='note'>
        <form >
            <input type="text" name="title" placeholder="Title" onChange={createNote} value={newNote.title} />
            <input type="text" name="content" placeholder="Take a note" onChange={createNote} value={newNote.content} />
            <button type="submit" onClick={
                addNewNotes
            }>
                <span>Add</span>
            </button>
        </form>
        <input></input>
    </div>)
}



export default AddNote;
