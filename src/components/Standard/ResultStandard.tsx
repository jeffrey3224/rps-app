import { useEffect, useState } from "react";
import Selector from "../Selector";

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
            return ("You Lose!").toUpperCase()
        }

        else if (winner === "draw") {
            return ("Draw").toUpperCase()
        }

        else return ("You Win!").toUpperCase();
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
        <div className="flex flex-row justify-center items-center gap-25 transition-all ease-in-out duration-500">
            <div className="flex flex-col items-center gap-20 w-[400px] h-[540px]">
                <h2 className="text-3xl font-bold">YOU PICKED</h2>
                <div className="flex items-center justify-center w-[400px] aspect-square">
                    {!showUser && <div className="bg-blue-950/60 w-[250px] h-[250px] rounded-[125px]"></div>}
                    {showUser && <Selector action={userPick} size={400} />}
                </div>
            </div>

            <div className={`flex flex-col items-center space-y-6 transform transition-all duration-300 ease-in-out origin-left ${showResult ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}>
                {<h3 className="text-6xl font-black">{getResultText()}</h3>}
                <button onClick={resetGame} className="bg-white cursor-pointer rounded-xl text-xl text-red-800 w-full py-3 font-black hover:bg-stone-200">
                    PLAY AGAIN
                </button>
            </div>

            <div className="flex flex-col items-center gap-20 w-[400px] h-[540px]">
                <h2 className="text-3xl font-bold">HOUSE PICKED</h2>
                <div className="flex items-center justify-center w-[400px] aspect-square">
                    {!showHouse && <div className="bg-blue-950/60 w-[250px] h-[250px] rounded-[125px]"></div>}
                    {showHouse && <Selector action={compPick} size={400} />}
                </div>
                
            </div>
        </div>
    )
}