import React from 'react'
import { Box } from '@mui/material'

// components
import SwipeDrawer from './SwipeDrawer'
import Notes from './Notes/Notes'

const Home = () => {
    return (
        <>
        <Box style = {{width : "100%" , display:'flex'}}>
            <SwipeDrawer />
            <Notes />
        </Box>
        </>

    )
}

export default Home
