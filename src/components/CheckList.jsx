export default function CheckList({list, height, isShowMore, handleShowMore}) {

    return (
        <div className="checklist" style={{height: `${height}px`}}>

        {
            list.map((checklistItem, index) => 
                <label className="shop-container" style={{ display: (index >= 6 && !isShowMore) ? 'none' : 'block' }}>
                    <p className="shop-container-title">{checklistItem}</p>
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>  
            )
        }

            <button onClick={handleShowMore}>Show {!isShowMore ? 'more' : 'less'}</button>

        </div>
    )
}