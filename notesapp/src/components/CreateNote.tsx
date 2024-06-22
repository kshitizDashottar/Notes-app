
import { Box, Button, InputBase , Typography, styled } from "@mui/material";
import { useState } from "react";
import {Noteobj} from '../models/note'
import {v4 as uuid} from 'uuid'
import { TITLE_LIMIT, TEXT_LIMIT } from "../constants/constant";
const Container = styled(Box)`
    & > * {
        margin-right: 20px !important;
        margin: 20px 0;
    }
    & > div > input[type="text"] {
        border-bottom: 1px solid #111111;
        opacity: 0.4;
        width: 300px;
        padding-right: 25px;
    }
    & > div > input[type="color"] {
        position: relative;
        bottom: -10px;
        width: 40px;
        height: 30px;
    }
    & > span {
        font-size: 10px;
        position: relative;
        right: 40px;

       
    }


    display: flex;
    align-items: center;  

     gap: 5px;

    
`;

const Error = styled(Typography)`
    background: red;
    color: #fff;
    padding: 10px;
    width: 50%;
    display: flex;
    align-items: center;  
`

const defaulObj  = {

    id: 0,
    title:'',
    details:'',
    color:'',
    date: (new Date().toLocaleString()).toString()
}



interface ICreateNoteProps{
    addNotes: (note:Noteobj)=>void
}

const CreateNote: React.FC<ICreateNoteProps> = ({addNotes})=>{

    const[note,setNote] = useState<Noteobj>(defaulObj)
    const[error, setError] =  useState<string>('')

    const onValueChange =  (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        if(error) setError('')
        setNote({...note,[e.target.name]:e.target.value})
    }

    const onCreateNote = ()=>{
        if(!note.title && !note.details){
            setError('All field is mandatory')
            return;
        }
        addNotes({...note, id:uuid()})
        setNote(defaulObj)
    }

     return(
        <Container>
            <InputBase
                placeholder="title"
                onChange={(e)=>onValueChange(e)}
                name="title"
                value = {note.title}
                inputProps={{
                    maxLength: TITLE_LIMIT
                }}
            />

                 <Box component="span">{note.title.length}/{TITLE_LIMIT}</Box>

            <InputBase
                placeholder="details"
                onChange={(e)=>onValueChange(e)}
                name="details"
                value = {note.details}

                
                inputProps={{
                    maxLength: TEXT_LIMIT
                }}
            />   

                <Box component="span">{note.details.length}/{TEXT_LIMIT}</Box>

            <InputBase
                type="color"
                defaultValue={'#f5f5f5'}
                placeholder="choose color"
                onChange={(e)=>onValueChange(e)}
                name="color"
            />  

            <Button variant="outlined"
               onClick={()=>onCreateNote()}
            >Create</Button>


            {error && <Error>All fields are mandatory</Error>}

        </Container>
     )


  }


  export default CreateNote;