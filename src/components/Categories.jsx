import '../styles/categories.css'
import categories from '../assets/categories/assortment'

function Category({title, image}) {
    return (
        <div className='category'>
            <p className='category-name'>{title}</p>
            <img className='category-image' src={image} />
        </div>
    )
}

export default function Categories() {
    return (
        
        <div className="categories">
            {
                categories.map(category => (
                    <Category title={category.title} image={category.image}/>
                ))
            }
        </div>
    )

}