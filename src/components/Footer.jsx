// Footer.js
import { Container, Grid, Typography } from '@mui/material';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2"sx={{lineHeight:'2rem',margin:'0 50px 0 0'}}>
            VGP The Temple Residency, established in 2023, offers a serene escape nestled amidst the cultural richness of its surroundings. With a blend of modern amenities and traditional charm, Our Residency promises a tranquil stay, complemented by warm hospitality and a range of thoughtful services.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <div className="contact">
            <Typography variant="body1" >

              Email: thetempleresidency@gmail.com
              </Typography>
            <Typography variant="body1" >

              Phone:  +91-9176677252
              
            </Typography>
            </div>
          </Grid>
        </Grid>
        <span style={{width:'8rem',height:'450px',border:'none'}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.7990185785293!2d80.18578627460029!3d12.726530620204898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5251ebf9ec86db%3A0x7a2a271ffaa972d9!2sVGP%20The%20Temple%20Residency%20Thiruporur!5e0!3m2!1sen!2sin!4v1709651783998!5m2!1sen!2sin" allowfullscreen="" loading="lazy" ></iframe>
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
