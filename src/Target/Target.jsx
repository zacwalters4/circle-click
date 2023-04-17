import { useState, useEffect } from 'react' 
import './Target.css';

function Target() {
    const [xPos, setXPos] = useState(30)
    const [yPos, setYPos] = useState(30)

    const getPos = () => {
        setXPos(Math.random() * 60)
        setYPos(Math.random() * 60)
    }

    return (
        <button
            onClick={getPos}
            className="target"
            style={{transform: `translate(${xPos}vh, ${yPos}vh)`}}
            >
            <div className="target-center" />
        </button>
    );
}

export default Target;
