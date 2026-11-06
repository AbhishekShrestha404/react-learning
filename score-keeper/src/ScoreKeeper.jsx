import { useState } from "react";

function ScoreKeeper({ numberOfPlayers, target }) {
    const [scores, setScores] = useState(new Array(numberOfPlayers).fill(0));
    function increaseScore(idx) {
        setScores(prevScore => {
            return prevScore.map((scores, i) => {
                return i === idx ? scores + 1 : scores
            }
            )
        })
    }

    function resetScore() {
        setScores(Array(numberOfPlayers).fill(0));
    }

    return (
        <div>
            <h1>SCORE KEEPER</h1>
            <ul>

                {scores.map((scores, idx) => {
                    return <li key={idx}>
                        Player{idx + 1}:{scores}
                        <button onClick={() => increaseScore(idx)}>+1</button>
                    </li>
                })}
            </ul>
            <button onClick={resetScore}>RESET</button>
        </div>
    )
}

export default ScoreKeeper;