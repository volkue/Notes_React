import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import AddNote from './AddNote';



function App() {

    const [newNotes, setNewNotes] = useState([]);
    function addNewNotes(newNote) {
        setNewNotes((prev) => {
            return [...prev, newNote];
        });

    }
    function deleteItem(id) {
        setNewNotes((prev) => {
            return prev.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (<div>
        <Header />
        <AddNote onAdd={addNewNotes} />
        {newNotes.map((note, index) => <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            del={deleteItem}
        />
        )}

        <Footer />
    </div>
    )
}

export default App;