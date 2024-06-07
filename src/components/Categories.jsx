import '../styles/categories.css'
import categories from '../assets/categories/assortment'

export default function Categories() {
    return (

        <>

            <hr className='categories-break-top' />
            <p className='categories-title'>BROWSE BY CATEGORY</p>
            
            <div className="categories">
                {
                    categories.map(category => (
                        <button>{category.title}</button>
                    ))
                }
            </div>

            <hr className='categories-break-bottom' />

        </>
    )

    

}