
import Target from '../Target/Target'
import './Game.css';
import { useState } from 'react' 

function Game({setScore, setTime, time}) {

  const [gameState, setGameState] = useState(0)

  const startGame = () => {
    setGameState(1)
    setTime(30)
    setScore(0)
    countdown()
    setTimeout(() => {
      setGameState(3)
    }, 30000)
  }

  const countdown = () => {
    setInterval(() => {
      
        setTime(time => {
          if(time > 0) {
            return time -= 1
          } else {
            clearInterval()
            return 0
          }
        })
    }, 1000)
  }

  // const timer = setInterval()

  return (
    <div className="game">
      {gameState === 0 && <button onClick={startGame}>Start Game</button>}
      {gameState === 1 && <Target setScore={setScore}/>}
      {gameState === 3 && <button onClick={() => setGameState(0)}>Try Again?</button>}
    </div>
  );
}

export default Game;
