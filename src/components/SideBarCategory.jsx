import {Plus, Minus} from '../assets/icons/assortment'
import CheckList from './CheckList';
import List from './List';

export default function SideBarCategory({title, isExpand, isShowMore, list, handleExpand, handleShowMore}) {

    const expandedHeight = (list.length < 6) ? (31 * (list.length)) : (28 * 6);
    const showMoreHeight =  (list.length > 6) ? (28 * (list.length)) : expandedHeight;

    let currentHeight = 0;

    if (!isExpand && !isShowMore) {
        currentHeight = 0;
    }

    else if (isExpand && !isShowMore) {
        currentHeight = expandedHeight;
    }

    else if (!isExpand && isShowMore) {
        currentHeight = 0
    }

    else {
        currentHeight = showMoreHeight;
    }

    return (
        
        <div className='side-bar-category'>


            <div className='side-bar-title'>
                <p className='shop-category-title'>{title}</p>
                <button onClick={handleExpand}><img src={!isExpand ? Plus : Minus} alt={!isExpand ? "Plus icon" : "Minus icon"} /></button>
            </div>

            
            {<CheckList list = {list} height = {currentHeight} isShowMore = {isShowMore} handleShowMore = {handleShowMore} />}
            
            
        </div>
    )
}