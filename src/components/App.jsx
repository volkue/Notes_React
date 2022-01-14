import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from '../note';
import AddNote from './AddNote';



function App() {
    return (<div>
        <Header />
        <AddNote />
        {notes.map(note => <Note
            key={note.key}
            title={note.title}
            content={note.content}
        />
        )}

        <Footer />
    </div>
    )
}

export default App;