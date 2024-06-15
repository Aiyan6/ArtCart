import '../styles/LandingPage.css'
import Header from './Header'
import ImageSlider from './ImageSlider'
import Categories from './Categories'
import TrendingArtworks from './TrendingArtworks'
import FeaturedCollections from './FeaturedCollections'
import FeaturedArtists from './FeaturedArtists'
import Editorial from './Editorial'
import Footer from './Footer'

export default function LandingPage() {
    return (
        <>
        <div className='header-slider-container'>
          <Header isLandingPage = {true}/>
          <ImageSlider/>
        </div>
    
          <Categories/>
    
          <TrendingArtworks title = "TRENDING ARTWORKS"/>
          <TrendingArtworks title = "THE ART OF SUMMER 2024"/>
        
          <FeaturedCollections/>
    
          <FeaturedArtists/>
    
          <Editorial/>
    
          <Footer/>
          
        </>
      )
}