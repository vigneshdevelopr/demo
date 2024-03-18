import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import '../styles/Tovisit.css'
import { TovisitData } from '../data/Tovisit'



const Tovisit = () => {
   const data = TovisitData
   console.log(data);
  return (
    <div>
    <div className="heading">
YOU CAN VISIT
</div>
    <div className='main_tovisit'>

<div className="cards">
    {data.map((visit, idx)=>(

   <>
<Card key={idx} sx={{ width: 245,height:240, borderRadius:'15px',backgroundColor:'#252525',color:'whitesmoke' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={visit.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="p" sx={{fontSize:'16px', textAlign:'center'}} component="div">
            {visit.name}
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
    </>

))}
</div>
    </div>
    </div>
  )
}

export default Tovisit