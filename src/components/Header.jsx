import '../styles/Header.css'
import {Palette, Cart, Search} from '../assets/icons/assortment.js'

export default function Header({isLandingPage}) {

    const headerClass = isLandingPage ? "header-landing-page" : "header-other-pages";

    return (
        <>
            <header className={headerClass}>

                <div className='top-section'>
                    <div className='top-left-section'>
                        <img className='palette-icon' src={Palette} alt="Palette icon" />
                        <p className='title'>ArtCart</p>
                    </div>

                    <div className='top-middle-section'>
                        <p>PAINTINGS</p>
                        <p>SKETCHES</p>
                        <p>DIGITAL ART</p>
                        <p>PHOTOGRAPHY</p>
                        <p>CRAFTS</p>
                    </div>

                    <div className='top-right-section'>
                        <div className='top-right-left-section'>
                            <p>LOG IN</p>
                            <p>|</p>
                            <p>SIGN UP</p>
                        </div>

                        <img className='cart-icon' src={Cart} alt="Cart icon"/>
                    </div>

                </div>

                <div className='bottom-section'>
                    <div className='search-bar-search-icon'>
                        <input className='search-bar' placeholder='Search for artworks, artists, articles...' type="text" />
                        <img className='search-icon' src={Search} alt="Search icon" />
                    </div>
                </div>

                <div className='modal'>
                    
                </div>
            </header>
        </>
    )
}