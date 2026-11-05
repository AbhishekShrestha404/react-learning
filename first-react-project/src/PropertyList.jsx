import Property from "./Property";
import "./PropertyList.css"

function PropertyList({ propertiesList }) {
    return (
        <div className="PropertyList">
            {propertiesList.map((p) => (
                <Property key={p.id} {...p} />
            ))}
        </div>
    );
}

export default PropertyList;
