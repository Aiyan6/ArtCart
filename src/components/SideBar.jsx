import '../styles/SideBar.css';
import CheckList from './CheckList';
import { useState } from 'react';
import SideBarCategory from './SideBarCategory'
import checkList from '../assets/SideBar/assortment';

export default function SideBar() {
    const [expand, setExpand] = useState({0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false});

    function handleExpand(index) {
        setExpand(e => ({
            ...e,
            [index]: !e[index]
        }));
    }

    return (
            <nav className='side-bar'>

                
                <div className='shop'>

                    <p className='shop-title'>
                        CATEGORIES
                    </p>

                    <select id="options" name="options" className='categories-dropdown'>
                            <option value="All">All</option>
                            <option value="Paintings">Paintings</option>
                            <option value="Sketches">Sketches</option>
                            <option value="Digital Art">Digital Art</option>
                            <option value="Photography">Photography</option>
                            <option value="Crafts">Crafts</option>
                    </select>

                </div>

                    {
                        checkList.map((checkListItem, index) => 
                            <SideBarCategory title = {checkListItem.title} isExpand={expand[index]} handleExpand={() => handleExpand(index)}>
                                <CheckList checklistItems={checkListItem.checkList}/>
                            </SideBarCategory>
                        )
                    }
            </nav>
    );
}
