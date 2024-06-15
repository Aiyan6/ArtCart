import {Plus, Minus} from '../assets/icons/assortment'

export default function SideBarCategory({title, isExpand, handleExpand, children}) {
    return (
        <div className='side-bar-category' style={{height: !isExpand ? '40px' : '200px'}}>

            <div className='side-bar-title'>
                <p className='shop-category-title'>{title}</p>
                <button onClick={handleExpand}><img src={!isExpand ? Plus : Minus} alt={!isExpand ? "Plus icon" : "Minus icon"} /></button>
            </div>

            {children}
        </div>
    )
}