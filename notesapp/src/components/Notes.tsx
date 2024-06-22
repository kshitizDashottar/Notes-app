import { Typography , Box } from "@mui/material"
import Note from "./Note"
import { Noteobj } from "../models/note"
interface INotesProps {
    notes: Noteobj[],
    deleteNote: (id: number) => void
}




const Notes:  React.FC<INotesProps>  = ({notes , deleteNote}) =>{


    return(
        <Box>
            <Typography variant="h5">
                Notes
            </Typography>
            <Box>

                {

                    notes.map(note=>(
                            <Note note={note} deleteNote={deleteNote}/>
                    ))

                }

            </Box>
        </Box>
    )

}


export default Notes