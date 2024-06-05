import Palette from '../assets/icons/palette.png'
import LeftArrow from '../assets/icons/left-arrow.png'
import RightArrow from '../assets/icons/right-arrow.png'
import '../styles/TrendingArtworks.css'
import { useState } from 'react'
import trendingArtworks from '../assets/TrendingArtworks/assortment'

export default function TrendingArtworks () {

    const [slideIndex, setSlideIndex] = useState(0);

    function prevSlide() {
        setSlideIndex ( index => {
            return (index === 0) ? trendingArtworks.length - 1 : index - 1;
            }
        )
    }

    function nextSlide() {
        setSlideIndex ( index => {
            return (index === trendingArtworks.length - 1) ? 0 : index + 1;
            }
        )
    }


    return (
        <>
            <section className='trending-artworks'>
                <div className="section-title">
                    <div className='section-title-content'>
                        <img src={Palette} alt="Image of a palette"/>
                        <p>Trending artworks</p>
                    </div>
                
                    <div className='section-title-buttons'>
                        <button onClick={prevSlide}><img src={LeftArrow} alt="Left arrow" /></button>
                        <button onClick={nextSlide}><img src={RightArrow} alt="Right arrow" /></button>      
                    </div>

                </div>

                <div className='slides1'>
                    {
                        trendingArtworks.map(grid =>
                            <div className='slide1' style={{translate : `${-100 * slideIndex}%`}}>
                                {
                                    grid.map(item => (
                                        <div className='artwork'>
                                            <img src={item.image} alt="" />
                                            <p className='artist'>{item.artist}</p>
                                            <p className='art-title'>{item.title}</p>
                                            <p className='price'>{item.price}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }

                </div>
            
            </section>

        </>
    )
}