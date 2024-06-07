import '../styles/categories.css'
import categories from '../assets/categories/assortment'

function Category({title, image, imageClass}) {
    return (
        <div className='category'>
            <p className='category-name'>{title}</p>
            <img className={imageClass} src={image} />
        </div>
    )
}

export default function Categories() {
    return (

        <>
            <p className='categories-title'>BROWSE BY CATEGORY</p>
            
            <div className="categories">
                {
                    categories.map(category => (
                        <Category title={category.title} image={category.image} imageClass={category.class}/>
                    ))
                }
            </div>

        </>
    )

    

}