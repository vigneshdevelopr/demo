import { Card, CardActionArea, CardMedia } from "@mui/material"
import testimonialData from "../data/Testimonial"
import '../styles/Testimonial.css'
const Testimonial = () => {
  return (
    <>
<div className='quote'>
       Testimonial

    </div>
<div className="testimonial_images">


    {testimonialData ?.map((media, idx)=>(
      <Card key={idx} sx={{ width: 345,height:300,border:'none',padding:'10px', borderRadius:'15px',color:'whitesmoke' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={media.image}
          alt="green iguana"
        />
        
      </CardActionArea>
    </Card>
    ))}
    </div>


    </>
    )
}

export default Testimonial