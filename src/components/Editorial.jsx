import '../styles/Editorial.css'
import { useState } from 'react'
import editorial from '../assets/Editorial/assortment'
import LeftArrow from '../assets/icons/left-arrow.png'
import RightArrow from '../assets/icons/right-arrow-mirrored.png'
import thickLine from '../assets/icons/thick-horizontal-line.png'
import thinLine from '../assets/icons/thin-horizontal-line.png'

export default function Editorial() {

    const [editorialIndex, setEditorialIndex] = useState(0);

    function prevSlide() {
        setEditorialIndex ( index => {
            return (index === 0) ? editorial.length - 1 : index - 1;
            }
        )
    }

    function nextSlide() {
        setEditorialIndex ( index => {
            return (index === editorial.length - 1) ? 0 : index + 1;
            }
        )
    }

    return (
        <section className='editorial-container'>
            <p className='editorial-title'>ARTICLES</p>
            <div className="editorial">
                <button className='editorial-left-button' ><img src={LeftArrow} alt="Left arrow" onClick={prevSlide} /></button>
                <button  className='editorial-right-button'><img src={RightArrow} alt="Right arrow" onClick={nextSlide} /></button>

                <div className='editorial-slides'>
                        {
                            editorial.map(articles => 

                                <div className='editorial-slide' style={{translate : `${-100 * editorialIndex}%`}}>
                                {
                                    articles.map(
                                        article => (

                                            <div className='news-item'>
                                                <img src={article.image} alt=""/>
                                                <h3>{article.title}</h3>
                                                <p>By {article.author}</p>
                                            </div>  
                                        )
                                    )
                                } 
                                </div>

                        )}
                </div>
            </div>

            <div className='editorial-nav-buttons-container'>
                        {
                            editorial.map((_, index) => (
                                <button className='trending-artworks-nav-buttons' onClick={ () => setEditorialIndex(index)}><img className="line-icon" src={(index === editorialIndex) ? thinLine : thickLine}/></button>
                            ))
                        }
            </div>
        </section>
    )
}