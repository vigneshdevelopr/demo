import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react'

import room1 from '../../assets/room1.jpeg'
import room2 from '../../assets/room2.jpeg'
import room3 from '../../assets/room3.jpeg'
import room4 from '../../assets/room4.jpeg'
import restroom from '../../assets/restroom.jpeg'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames(),Autoplay({ playOnInit: false, delay: 3000 })])
  const [isPlaying, setIsPlaying] = useState(false)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)


  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
  
    setIsPlaying(true)
    autoplay.play()
  
    emblaApi
      .on('autoplay:stop', () => setIsPlaying(false))
      .on('reInit', () => {
        setIsPlaying(false)
        autoplay.play()
      })
  
    return () => autoplay.stop()
  }, [emblaApi])


  const data = [
    {
      image: room1
    },
    {
      image: room2
    },
    {
      image: room3
    },
    {
      image: room4
    },
    {
      image: restroom
    },
  ]
  

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map((index) => (
            <div className="embla__slide embla__class-names" key={index}>
              <img
                className="embla__slide__img"
                src={index.image}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default EmblaCarousel
