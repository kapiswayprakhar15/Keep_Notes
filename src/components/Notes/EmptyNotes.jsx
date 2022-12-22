import React from 'react'
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import { Typography ,Box} from '@mui/material';
import { styled } from '@mui/material/styles';




const Book = styled(BookOutlinedIcon)`

font-size : 120px ;
color : #f5f5f5

`
const Text = styled(Typography)`

color : #80868b ;
font-size : 22px 

`

const Container = styled(Box)
`
display : flex ;
flex-direction : column;
align-items : center ;
margin-top : 20vh ;
`

const EmptyNotes = () => {
  return (
    <Container>
        <Book/>
        <Text>Notes you add appear here</Text>
    </Container>
  )
}

export default EmptyNotes;