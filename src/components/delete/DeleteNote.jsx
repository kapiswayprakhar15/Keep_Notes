import { useContext } from 'react';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { ArchiveOutlined } from '@mui/icons-material';
// import { DeleteOutlineOutlined } from '@mui/icons-material';
import { RestoreFromTrashOutlined , DeleteForeverOutlined } from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 25px 20px 0px 1px;
    box-shadow: none;
`
const DeleteNote = ({ note }) => {
    const { deleteNotes, setNotes, setDeleteNotes } = useContext(DataContext)
    const restoreNote = (note) => {
        const updatedNotes = deleteNotes.filter(data => data.id !== note.id);
        setDeleteNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);
    }
    const removeNote = (note) => {
        const updatedNotes = deleteNotes.filter(data => data.id !== note.id);
        setDeleteNotes(updatedNotes);
        // setDeleteNotes(prevArr => [note, ...prevArr]);
    }


    return (
        <StyledCard>
                <CardContent>
                    <Typography>{note.heading}</Typography>
                    <Typography>{note.text}</Typography>
                </CardContent>
                <CardActions>
                    < RestoreFromTrashOutlined
                    fontSize='small'
                    style = {{marginLeft :'auto'}}  
                    onClick={() => restoreNote(note)}  
                    />
                    < DeleteForeverOutlined                 
                    fontSize='small'
                    // style = {{marginLeft :'auto'}} 
                    onClick={() => removeNote(note)}     
                    />
                </CardActions>
        </StyledCard>
    )
}

export default DeleteNote;