import LeftArrow from '../assets/icons/left-arrow.png'
import RightArrow from '../assets/icons/right-arrow-mirrored.png'
import '../styles/TrendingArtworks.css'
import { useState } from 'react'
import trendingArtworks from '../assets/TrendingArtworks/assortment'

export default function TrendingArtworks ({title}) {

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

                <p className='trending-artworks-title'>{title}</p>

                <button className='trending-artworks-left-button'><img src={LeftArrow} alt="Left arrow" onClick={prevSlide} /></button>
                <button  className='trending-artworks-right-button'><img src={RightArrow} alt="Right arrow" onClick={nextSlide} /></button>
                
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