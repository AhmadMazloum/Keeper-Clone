import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App(){
    const [notesArray, setNotesArray] = useState([]);

    function handleClick(newNote){
        setNotesArray((prevItems) =>{
            return [...prevItems, newNote];
        } )
    }
    function deleteNote(id){
        setNotesArray(prevItems => {
            return prevItems.filter((noteItem, index)=> {
                return index !== id
            })
        })
    }
    return (
        <div>
            <Header />
            <CreateNote handleClick = {handleClick}/>
            {notesArray.map((noteItem, index) =>(
                <Note
                    key = {index}
                    id = {index}
                    title = {noteItem.title}
                    content = {noteItem.content} 
                    deleteNote = {deleteNote}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;