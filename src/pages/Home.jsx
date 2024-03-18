// import Gallery from "../components/Gallery"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Navbar from "../components/Navbar"
import Quote from "../components/Quote"
import Testimonial from "../components/Testimonial"
import Tovisit from "../components/Tovisit"
import Welcome from "../components/Welcome"


const Home = () => {
  return (
    <div>
    <div className='main_home'></div>
<div className="home">
      <Navbar />
      <Welcome />
      </div>
      <div  className="secondary">
        <Tovisit />
      </div>
      <div  className="third">
      <Quote />
      </div>
      <div  className="four">
      <Gallery />
      </div>
      <div className="five">
        <Testimonial />
      </div>
      <div className="footer_div">
<Footer />
      </div>
      </div>
  )
}

export default Home
