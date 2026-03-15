import { useEffect, useState } from "react";
import Selector from "./Selector";

type Props = {
    userPick: string;
    compPick: string;
    winner: string;
    resetGame: () => void;
}

export default function ResultStandard({userPick, compPick, winner, resetGame}: Props) {

    const [showUser, setShowUser] = useState(false);
    const [showHouse, setShowHouse] = useState(false);
    const [showResult, setShowResult] = useState(false);

    function getResultText() {
        if (winner === "computer") {
            return ("You Lose!")
        }

        else if (winner === "draw") {
            return ("It's A Draw")
        }

        else return ("You Win!")
    }

 
   useEffect(() => {
        const t1 = setTimeout(() => setShowUser(true), 250);
        const t2 = setTimeout(() => setShowHouse(true), 1000);
        const t3 = setTimeout(() => setShowResult(true), 2000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };

    }, [])

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-col items-center gap-20">
                    <h2>User Pick:</h2>
                    {showUser && <Selector action={userPick} size={400} />}
                </div>

                <div>
                    {showResult && <h2>{getResultText()}</h2>}
                </div>

                <div>
                    <h2>House Pick:</h2>
                    {showHouse && <Selector action={compPick} size={400} />}
                </div>
            </div>

            {showResult && (
                <button onClick={resetGame}>
                    Play Again
                </button>
            )}
        </div>
    )
}