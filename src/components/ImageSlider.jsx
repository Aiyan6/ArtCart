import '../styles/image-slider.css'
import LeftArrow from '../assets/icons/left-arrow-mirrored.png'
import RightArrow from '../assets/icons/right-arrow.png'
import RadioButtonUnchecked from '../assets/icons/elipse-empty.png'
import RadioButtonChecked from '../assets/icons/elipse-filled.png'

import slides from '../assets/image-slider/assortment.js'
import { useState } from 'react'

export default function ImageSlider() {

    const [imageIndex, setImageIndex] = useState(0);

    function prevImage() {
        setImageIndex ( index => {
            return (index === 0) ? slides.length - 1 : index - 1;
            }
        )
    }

    function nextImage() {
        setImageIndex ( index => {
            return (index === slides.length - 1) ? 0 : index + 1;
            }
        )
    }

    return (
            <div className='image-slider'>
                <div className='slides'>
                    {
                        slides.map(slide => (

                            
                            <div className='slide' key={slide.image} style={{translate : `${-100 * imageIndex}%`}}>
                                <img 
                                    src={slide.image} 
                                    className='slider-image'
                                />

                                <div className='slide-content'>
                                    <div className='content'>
                                        <p className='slide-title'>{slide.title}</p>
                                        <p className='slide-description'>{slide.description}</p>
                                        <button className='slide-button'>{slide.button}</button>
                                    </div>
                                </div>
                            </div>

                            
                            )
                        )
                    }

                    
                    <button className='left-button' onClick={prevImage}><img src={LeftArrow} alt="Left arrow" /></button>
                    <button className='right-button' onClick={nextImage}><img src={RightArrow} alt="Right arrow" /></button>



                    <div className='nav-buttons-container'>
                        {
                            slides.map((_, index) => (
                                <button className='nav-buttons' onClick={ () => setImageIndex(index)}><img className="elipse-icon" src={(index === imageIndex) ? RadioButtonChecked : RadioButtonUnchecked}/></button>
                            ))
                        }
                    </div>

                </div>
            </div>
    )
}