import { useContext } from 'react';


import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArchiveOutlined } from '@mui/icons-material';
import { DeleteOutlineOutlined } from '@mui/icons-material';

import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 25px 20px 0px 1px;
    box-shadow: none;
`

const Archive = ({ note }) => {


    const { setNotes, archiveNotes, setAcrchiveNotes, setDeleteNotes } = useContext(DataContext);

    const UnarchiveNote = (note) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== note.id);
        setAcrchiveNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== note.id);
        setAcrchiveNotes(updatedNotes);
        setDeleteNotes(prevArr => [note, ...prevArr]);
    }


    return (
        <StyledCard>
                <CardContent>
                    <Typography>{note.heading}</Typography>
                    <Typography>{note.text}</Typography>
                </CardContent>
                <CardActions>
                    <ArchiveOutlined
                    fontSize='small'
                    style = {{marginLeft :'auto'}}  
                    onClick={() => UnarchiveNote(note)}  
                    />
                    <DeleteOutlineOutlined                 
                    fontSize='small'
                    // style = {{marginLeft :'auto'}} 
                    onClick={() => deleteNote(note)}     
                    />
                </CardActions>
        </StyledCard>
    )
}

export default Archive;