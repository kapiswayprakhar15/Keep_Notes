import React from 'react'
import { useContext } from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material';
import Form from './Form';
import Note from './Note';
import { DataContext } from '../../context/DataProvider';
import EmptyNotes from './EmptyNotes';

const DrawerHeader = styled('div')(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Notes = () => {


  const { notes } = useContext(DataContext);
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Form />
          {notes.length > 0 ?
            <Grid container style={{display:'flex' , justifyContent : 'center'}} >
              {

                notes.map(note => (
                  <Grid items>
                    <Note note={note} />
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

export default Notes