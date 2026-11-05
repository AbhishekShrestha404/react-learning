import { useState } from "react";
import './ColorBox.css'

function randomColorGenerator(arr) {
    const randomIndex = Math.floor((Math.random() * arr.length));
    return arr[randomIndex];
}

function ColorBox({ colors }) {
    const [color, setColor] = useState(randomColorGenerator(colors));

    const ChangeColor = () => {
        const randomColor = randomColorGenerator(colors);
        setColor(randomColor);
    }

    return (
        <div className="ColorBox" style={{ backgroundColor: color }} onClick={ChangeColor} >
            {/* <p>{color}</p> */}
            {/* <h1>hi</h1> */}
        </div >
    )
}

export default ColorBox;