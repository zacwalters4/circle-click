import { useState, useEffect } from 'react' 
import './Target.css';

function Target({setScore}) {
    const [xPos, setXPos] = useState(30)
    const [yPos, setYPos] = useState(30)

    const getPos = () => {
        setXPos(Math.random() * 60)
        setYPos(Math.random() * 60)
    }

    const handleClick = () => {
        setScore(score => score +=1)
        getPos()
    }

    useEffect(()=> {
        getPos()
      }, [])

    return (
        <button 
            tabIndex={-1}
            onClick={handleClick}
            className="target"
            style={{left: `${xPos}vh`, top: `${yPos}vh`}}
            >
            <div className="target-center" />
        </button>
    );
}

export default Target;
