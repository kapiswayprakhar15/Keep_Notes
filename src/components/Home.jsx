import React from 'react'
import { Box } from '@mui/material'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
// components
import SwipeDrawer from './SwipeDrawer'
import Notes from './Notes/Notes'
import Archives from './archives/Archives'
import DeleteNotes from './delete/DeleteNotes'

const Home = () => {
    return (
        <>
        <Box style = {{width : "100%" , display:'flex' , justifyContent : 'center'}}>

            <Router>
            <SwipeDrawer />
            <Routes>
                <Route path = "/" element = {<Notes/>} />
                <Route path = "/archive" element = {<Archives/>} />
                <Route path = "/delete" element = {<DeleteNotes/>} />
           
            </Routes>
            </Router>
        </Box>
        </>

    )
}

export default Home
