import '../styles/FeaturedCollections.css'
import featuredCollections from '../assets/FeaturedCollections/assortment'
import LeftArrow from '../assets/icons/left-arrow.png'
import RightArrow from '../assets/icons/right-arrow.png'

export default function FeaturedCollections() {
    return (
        <section className='featured-collections-container'>
            <hr className='featured-collections-break'/>

            <div className='featured-collections'>
                <p className='featured-collections-title'>Featured Collections</p>

                <div className='collections-container'>
                    {
                        featuredCollections.map(collection => (
                            <div className='collection-container'>
                                <div className='overlay-container'>
                                    <img className='primary-image' src={collection.primary} alt="" />
                                    <div className='secondary-images-container'>
                                        <img src={collection.secondary_1} alt="" />
                                        <img src={collection.secondary_2} alt="" />
                                        <img src={collection.secondary_3} alt="" />
                                    </div>
                                </div>
                                <p className='collection-title'>{collection.title}</p>
                                <p className='collection-description'>Discover our captivating abstract art collection, where colors and forms intertwine to evoke emotion and inspire imagination.</p>
                                <button className='collection-button'>Explore</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}