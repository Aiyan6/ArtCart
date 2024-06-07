import featuredArtists from "../assets/FeaturedArtists/assortment"
import '../styles/FeaturedArtists.css'

export default function FeaturedArtists() {
    return (
        <>
            <hr className="featured-artists-break"/>
            <section className="featured-artists-container">
                <p className="featured-artists-title">FEATURED ARTISTS</p>
                <div className="artists-package">
                    <div className="artists-info">
                        <div className="artist-info">
                            <h2>Hamza Fiaz</h2>
                            <p>Pakistan</p>
                        </div>

                        <div className="artist-info">
                            <h2>Mehroo Waqas</h2>
                            <p>Pakistan</p>
                        </div>

                        <div className="artist-info">
                            <h2>Kanza Naeem</h2>
                            <p>Pakistan</p>
                        </div>
                
                    </div>

                    <div className="artists-work">
                        {
                            featuredArtists.map(featuredArtists => (
                                <div className="artist-work">
                                    <img src={featuredArtists.image_1} alt="Featured artist image 1" />
                                    <img src={featuredArtists.image_2} alt="Featured artist image 2" />
                                    <img src={featuredArtists.image_3} alt="Featured artist image 3" />
                                    <img src={featuredArtists.image_4} alt="Featured artist image 4" />
                                    <img src={featuredArtists.image_5} alt="Featured artist image 5" />
                                </div>
                            ))
                        }


                    </div>

                </div>
            </section>
        </>
    )
}