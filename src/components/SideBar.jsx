import '../styles/SideBar.css';
import { useState } from 'react';
import SideBarCategory from './SideBarCategory'
import checkList from '../assets/SideBar/assortment';

export default function SideBar() {
    const [expand, setExpand] = useState({0: [false, false], 1: [false, false], 2: [false, false], 3: [false, false], 4: [false, false], 5: [false, false], 6: [false, false], 7: [false, false]});

    function handleExpand(index) {
        setExpand(e => ({
            ...e,
            [index]: [!e[index][0], e[index][1]]
        }));
    }

    function handleShowMore(index) {
        setExpand(e => ({
            ...e,
            [index]: [e[index][0], !e[index][1]]
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
                        checkList.map((checkListItem, index) => (
                            

                            <SideBarCategory title={checkListItem.title} isExpand={expand[index][0]} isShowMore={expand[index][1]} list={checkListItem.checkList} handleExpand={() => handleExpand(index)} handleShowMore={() => handleShowMore(index)}/>
                            
                       
                        ))
                    }
            </nav>
    );
}
