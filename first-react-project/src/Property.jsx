function PropertListItem({ name, rating, price }) {
    return (
        <div>
            <h2>{name}</h2>
            <h4>${price} a Night</h4>
            <h3>{rating} &#11088;</h3>
        </div>


    )
}

export default PropertListItem;