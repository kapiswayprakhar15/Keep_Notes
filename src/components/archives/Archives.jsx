import React from 'react'
import { useContext } from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material';
import Archive from './Archive';
import { DataContext } from '../../context/DataProvider';
import EmptyNotes from '../Notes/EmptyNotes';

const DrawerHeader = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Archives = () => {


    const { archiveNotes } = useContext(DataContext);
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    {archiveNotes.length > 0 ?
                        <Grid container style={{ display: 'flex', justifyContent: 'center' }} >
                            {
                                archiveNotes.map(archive => (
                                    <Grid items>
                                        <Archive note={archive} />
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

export default Archives;