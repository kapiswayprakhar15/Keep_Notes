import React from 'react'
import { useContext } from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material';
import DeleteNote from './DeleteNote';
import { DataContext } from '../../context/DataProvider';
import EmptyNotes from '../Notes/EmptyNotes';

const DrawerHeader = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const DeleteNotes = () => {


    const { deleteNotes } = useContext(DataContext);
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    {deleteNotes.length > 0 ?
                        <Grid container style={{ display: 'flex', justifyContent: 'center' }} >
                            {

                                deleteNotes.map( deletenote => (
                                    <Grid items>
                                        <DeleteNote note={deletenote} />
                                    </Grid>
                                ))
                            }
                        </Grid> :
                        <EmptyNotes />
                    }
                </Box>
            </Box>
        </>
    )
}

export default DeleteNotes;