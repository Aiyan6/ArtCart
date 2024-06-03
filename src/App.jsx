import './styles/App.css'
import './styles/header.css'
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import Categories from './components/Categories'
import TrendingArtworks from './components/TrendingArtworks'

function App() {
  return (
    <>
      <Header/>
      <ImageSlider/>
      <Categories/>
      <TrendingArtworks/>
    </>
  )
}

export default App