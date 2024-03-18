import EmblaCarousel from "./Carousel/EmblaCarousel"
import '../styles/embla.css'

const Gallery = () => {
  const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div>

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}

export default Gallery