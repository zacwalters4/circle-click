
import Target from '../Target/Target'
import './Game.css';
import { useState } from 'react' 

function Game({setScore, setTime, time}) {

  const [gameState, setGameState] = useState(0)
  let intervalID

  const startGame = () => {
    setGameState(1)
    setTime(30)
    setScore(0)
    countdown()
    setTimeout(() => {
      setGameState(3)
      clearInterval(intervalID)
    }, 30000)
  }

  const countdown = () => {
    intervalID = setInterval(() => {
      
        setTime(time => {
          if(time > 0) {
            return time -= 1
          } else {
            return 0
          }
        })
    }, 1000)
  }

  // const timer = setInterval()

  return (
    <div className="game">
      {gameState === 0 && <button className="game-button" onClick={startGame}>Start Game</button>}
      {gameState === 1 && <Target setScore={setScore}/>}
      {gameState === 3 && <button className="game-button" onClick={() => setGameState(0)}>Try Again?</button>}
    </div>
  );
}

export default Game;
