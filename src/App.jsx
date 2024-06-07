import './styles/App.css'
import './styles/header.css'
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import Categories from './components/Categories'
import TrendingArtworks from './components/TrendingArtworks'
import OnSale from './components/OnSale'
import FeaturedArtworks from './components/FeaturedArtworks'

function App() {
  return (
    <>


    <div className='header-slider-container'>
      <Header/>
      <ImageSlider/>
    </div>

      <Categories/>

      <TrendingArtworks title = "TRENDING ARTWORKS"/>
      <TrendingArtworks title = "THE ART OF SUMMER 2024"/>
    
      <FeaturedArtworks/>

    </>
  )
}

export default App