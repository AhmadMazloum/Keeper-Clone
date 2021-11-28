import React, { useState }  from "react";

function CreateNote(props){
    
    const [noteToBe, setNoteToBe] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const { name, value }= event.target;
        setNoteToBe( prevValue =>{
            return{
                ...prevValue,
                [name]: value
            }
        });
    }
    function sumbitNote(event){
        props.handleClick(noteToBe)
        setNoteToBe({
            title: "",
            content: ""})
        event.preventDefault();
    }
    return(
        <div>
            <form>
                <input onChange={handleChange} name="title" placeholder="Title" value={noteToBe.title}/>
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={noteToBe.content}/>
                <button onClick=  {sumbitNote}>Add</button>
            </form>
        </div>
     );   
}
export default CreateNote;