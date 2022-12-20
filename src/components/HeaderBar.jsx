import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';






const Header = styled(AppBar)`

z-index : 1201 ;
background : #fff ; 
height : 70px ;
box-shadow : inset 0 -1px  0 0 #dadce0 ;

`;


const Heading = styled (Typography)`
color : #5F6368;
font-size : 24px ;
padding-left: 25px 

`





const HeaderBar = ({ open, handleDrawer }) => {
    const logo = 'https://cdn-icons-png.flaticon.com/128/8238/8238823.png';
    return (
        <>
            <Header open={open}>
                <Toolbar>
                    <IconButton
                        // color="inherit"
                        // aria-label="open drawer"
                        onClick={handleDrawer}
                        edge="start"
                        sx={{
                            marginRight: 3,
                            // ...(open && { display: 'none' }),
                        }}
                    >
                        <Menu />
                    </IconButton>
                    <img src={logo}  alt ='logo' style = {{width : 45}}/>
                    <Heading >KEEP</Heading >
                </Toolbar>
            </Header>
        </>
    )
};

export default HeaderBar;