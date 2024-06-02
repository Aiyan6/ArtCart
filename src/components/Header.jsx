import '../styles/header.css'
import Palette from '../assets/icons/palette.png'
import Search from '../assets/icons/search.png'
import Cart from '../assets/icons/cart.png'

export default function Header() {
    return (
        <>
            <header className="header">

                <div className='top-section'>

                    <div className='top-left-section'>
                        <img className='palette-icon' src={Palette} alt="Palette icon" />
                        <p className='title'>ArtCart</p>
                    </div>

                    <div className='top-middle-section'>
                        <p>Paintings</p>
                        <p>Sketches</p>
                        <p>Digital Art</p>
                        <p>Photography</p>
                        <p>Crafts</p>
                    </div>

                    <div className='top-right-section'>
                        <div className='top-right-left-section'>
                            <p>Log In</p>
                            <p>|</p>
                            <p>Sign Up</p>
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
            </header>
        </>
    )
}