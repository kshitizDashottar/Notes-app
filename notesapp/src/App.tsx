import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import {Box} from  '@mui/material'
import Notes from "./components/Notes";
import { useState } from "react";
import { Noteobj } from "./models/note";
import { useEffect } from "react";
function App() {
  const [notes, setNotes] = useState<Noteobj[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem('notes')) {
      setNotes(JSON.parse(sessionStorage.getItem('notes') as string));
    }
  }, [])

  const addNotes = (note:Noteobj)=>{
    setNotes([note,...notes]);
    sessionStorage.setItem('notes', JSON.stringify([ note, ...notes ]));
  }

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes); 
    sessionStorage.setItem('notes', JSON.stringify(updatedNotes));
  }

  return (
     <>
        <Header/>
        <Box style = {{padding : 20}}>
           <CreateNote addNotes = {addNotes}/>
           <Notes notes = {notes} deleteNote={deleteNote}/>
        </Box>
       
     </>
  );
}

export default App;