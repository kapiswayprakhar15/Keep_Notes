import React from 'react'
import { Box } from '@mui/material' 
import { styled } from '@mui/material';
import Form from './Form';

const DrawerHeader = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  

const Notes = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Form/>
      </Box>




      </Box>
    
    
    
    </>
  )
}

export default Notes