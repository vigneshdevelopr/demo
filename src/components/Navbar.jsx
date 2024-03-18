import { Grid } from '@mui/material'
import '../styles/Home.css'
import logo from '../assets/logo.png'
import '../styles/Navbar.css'
const Navbar = () => {
  return (
<div className="image">
        <Grid container>
          <Grid item xs={6}>
            <div className="title">
              {/* <h1 style={{color:'white', fontWeight:'normal'}}>VGP Temple City Residency</h1> */}
            <img style={{width:'25%'}} src={logo} alt="image"  />
            </div>
          </Grid>
          <Grid item xs={6}>
            {/* <div className="burgerBar">
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,color:'white' }}
          >
            <MenuIcon />
          </IconButton>
            </div> */}
          </Grid>
        </Grid>
      </div>
    )
}

export default Navbar