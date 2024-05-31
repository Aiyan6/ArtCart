import '../styles/header.css'
import Palette from '../assets/icons/palette.png'
import Search from '../assets/icons/search-icon.png'

export default function Header() {
    return (
        <>
            <header className="header">

                <div className='left-section'>
                    <img className='palette-icon' src={Palette} alt="Palette icon" />
                    <p className='title'>ArtCart</p>
                </div>

                <div className='middle-section'>
                    <div className='categories'>
                        <p>Paintings</p>
                        <p>Sketches</p>
                        <p>Digital Art</p>
                        <p>Photography</p>
                        <p>Crafts</p>
                    </div>

                    <div className='search-bar-search-icon'>
                        <input className='search-bar' type="text" placeholder='Search for artworks, artists, articles...' />
                        <img  className='search-icon' src={Search} alt="Search icon" />
                    </div>
                </div>


                <div className='right-section'></div>
            </header>
        </>
    )
}