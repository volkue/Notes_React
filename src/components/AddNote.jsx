import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function AddNote(props) {
    const [newNote, setNewNote] = useState({

        title: "",
        content: ""
    });
    const [isExpanded, setIsExpanded] = useState(false);
    function createNote(e) {
        const { name, value } = e.target;
        setNewNote((prev) => {
            // if (name === "title") {
            //     return {
            //         title: value,
            //         content: prev.content
            //     }
            // }
            // else if (name === "content") {
            //     return {
            //         title: prev.title,
            //         content: value
            //     }
            // }
            return {
                ...prev,
                [name]: value
            }

        });
    }
    function submitNote(e) {
        props.onAdd(newNote);
        setNewNote({
            title: "",
            content: ""
        })
        e.preventDefault();


    }
    function expand() {
        setIsExpanded(true);
    }
    return (<div>
        <form className="create-note">
            {isExpanded && <input type="text" name="title" placeholder="Title" onChange={createNote} value={newNote.title} />}
            <textarea name="content" placeholder="Take a note" onChange={createNote} value={newNote.content} rows={isExpanded ? 3 : 1}
                onClick={expand}
            />
            {isExpanded && <Zoom in={true} >
                <Fab type="submit" onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </Zoom>}
        </form>
    </div>)
}



export default AddNote;
