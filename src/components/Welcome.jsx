import { Button } from '@mui/material'
import '../styles/Home.css'
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Mail, WhatsApp } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  // border: '2px solid #000',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', // Updated boxShadow property
  p: 4, // Assuming this is shorthand for padding
  
  background: 'rgba( 255, 255, 255, 0.5 )',

  borderRadius: 5,
  // border: '1px solid rgba(255, 255, 255, 0.18)', // Updated border property
  backdropFilter: 'blur(4px)', // Updated backdropFilter property
  WebkitBackdropFilter: 'blur(4px)', // Updated WebkitBackdropFilter property
};

const Welcome = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="welcome">
<div className="text">
    Welcome to VGP The Temple Residency !
<br />
<section className='slogan'>
Discover the comfort
</section>
<div className="button">
    <Button className='exploreButton' sx={{color:'black', border:'1px solid black',fontWeight:'normal',borderRadius:'15px',backgroundColor:'#C59339'}} variant='outlined' onClick={handleOpen}>Contact us</Button>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Contact Residency...
            </Typography>
            <div className='icons'>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <span><a style={{textDecoration:'none', color:'black'}} href="tel:+919176677252"><LocalPhoneIcon /></a></span>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
               <span><a style={{textDecoration:'none', color:'black'}} href="//api.whatsapp.com/send?phone=919176677252&text=Hi, I want to Enquire about The Temple Residency"><WhatsApp /></a></span>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
               <span><a style={{textDecoration:'none', color:'black'}} href="mailto:thetempleresidency@gmail.com"><Mail /></a></span>
            </Typography>
            </div>
          </Box>
        </Fade>
      </Modal>
</div>
</div>


    </div>
  )
}

export default Welcome