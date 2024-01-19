import React from 'react'
import { AppBar,Box,Tabs,Tab,Button,Toolbar } from '@mui/material'
import logo from './Logo.jpg'
import icon from './Call Icon.jpg'
import {Link} from 'react-router-dom'
import '../../styles/Navbar.css'
const Navbar = () => {
  
  return (
    <>
     <AppBar sx={{backgroundColor:'white',height:'70px'}}>
      <Toolbar>
      <img src={logo} alt="Logo" />
      <Box sx={{gap:'40px',display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'226px',marginRight:'33px'}}>
       <Tabs>
      <Tab label="Home" sx={{ color: 'black',fontFamily:'K2D',fontSize:'16px',fontWeight:'400',wordWrap:'break-word'}}/>
      <Tab label="Features" sx={{ color: 'black',fontFamily:'K2D',fontSize:'16px',fontWeight:'400',wordWrap:'break-word'}} />
      <Tab label="Gallery" sx={{ color: 'black',fontFamily:'K2D',fontSize:'16px',fontWeight:'400',wordWrap:'break-word'}} />
      <Tab label="Pricing"  sx={{ color: 'black',fontFamily:'K2D',fontSize:'16px',fontWeight:'400',wordWrap:'break-word'}} />
      <Tab label="Team" sx={{ color: 'black',fontFamily:'K2D',fontSize:'16px',fontWeight:'400',wordWrap:'break-word'}}/>
      </Tabs>
       {/* <Link to={"/"}>Home</Link>
        <Link to={"/"}>Features</Link>
        <Link to={"/"}>Gallery</Link>
        <Link to={"/"}>Pricing</Link>
        <Link to={"/"}>Team</Link> */}
      </Box>
      <Box sx={{gap:'10px',display:'flex',alignItems:'center',justifyContent:'center',marginRight:'auto',marginLeft:'0px'}}>
      <img src={icon} alt="Icon"/>
        <Link to={"/"}>+91-123456789</Link>
      </Box>
      <Box sx={{marginRight:'73px',marginLeft:'36px',alignItems:'center',justifyContent:'center'}}>
      <Button variant='contained' sx={{background:'linear-gradient(90deg, #41497D 0%, #C51818 100%)',borderRadius:'50px',paddingLeft:'26px',paddingRight:'26px',paddingTop:'5px',paddingBottom:'5px',fontFamily:'K2D'}}>Book a Demo Call</Button>
      </Box>
      </Toolbar>
     </AppBar>
        
    </>
  )
}

export default Navbar