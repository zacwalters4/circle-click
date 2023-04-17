
import Game from '../Game/Game'
import './App.css';
import { useState } from 'react' 

function App() {
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(30)

  return (
    <main>
      <p>Score: {score}</p>
      <Game setScore={setScore} setTime={setTime} time={time} />
      <p>Time: {time}</p>
    </main>
  );
}

export default App;
