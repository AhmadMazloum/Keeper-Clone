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
        }
        
        )
    }
    return (
        <div>
            <Header />
            <CreateNote handleClick = {handleClick}/>
            {notesArray.map(noteItem =>(
                <Note
                    key = {noteItem.id}
                    title = {noteItem.title}
                    content = {noteItem.content} 
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;