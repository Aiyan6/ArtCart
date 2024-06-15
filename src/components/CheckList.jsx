export default function CheckList({checklistItems}) {
    return (
        <div class="checklist">

            {
                checklistItems.map(checklistItem => 

                    <label className="shop-container">
                        <p className="shop-container-title">{checklistItem}</p>
                        <input type="checkbox"/>
                        <span class="checkmark"></span>  
                    </label>   
                )
            }

        </div>
    )
}