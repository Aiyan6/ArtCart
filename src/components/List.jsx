export default function List({list}) {
    return (
        <div className="list">
            {
                list.map(listItem => 
                    <p>
                        {listItem}
                    </p>
                )
            }

        </div>
    )
}