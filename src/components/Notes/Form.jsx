import React from 'react'
import { Box } from '@mui/material'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { useState, useRef } from 'react'


const Container = styled(Box)`
display : flex ;
flex-direction : column ;

width : 600px ;
padding : 10px 15px ;
border-radius : 8px ;
border-color : #e0e0e0;
box-shadow : 0 1px 2px 0 rgb(60 64 67 / 30%) , 0 2px 6px 2px rgb(60 64 67/15%);
margin: auto ;
min-height : 30px ;

`;

const Form = () => {

  const [showTextField, setShowTextField] = useState(false);

  const onTextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = '100px'
  
  }
  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = '30px'


  }

  const containerRef = useRef();

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Container ref = {containerRef}>
          {showTextField &&
            <TextField
              placeholder='Title'
              variant='standard'
              InputProps={{ disableUnderline: true }}
              style={{ marginBottoom: 10 }}
            />}
          <TextField
            placeholder='Take a note...'
            variant='standard'
            InputProps={{ disableUnderline: true }}
            multiline
            maxRows={Infinity}
            onClick={onTextAreaClick}
          />
        </Container>
      </ClickAwayListener>
    </>
  )
}

export default Form;