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
    const [selectorSize, setSelectorSize] = useState(0);

    const handleResize = () => {
        if (window.innerWidth < 576) {
            setSelectorSize(Math.floor(window.innerWidth * .4));
        }

        else if (window.innerWidth < 768 && window.innerWidth > 575) {
            setSelectorSize(200)
        }

        else if (window.innerWidth < 1024 && window.innerWidth > 768) {
            setSelectorSize(215);
        }

        else setSelectorSize(250);
    }

    useEffect(() => {

        handleResize();

        window.addEventListener("resize", handleResize
        )
        return () => {
            window.removeEventListener("resize", handleResize)
        }
            
    }, [])

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
        <section className="w-full h-full flex flex-wrap justify-center items-center gap-5 transition-all ease-in-out duration-500 my-10">
            <div className={`flex flex-col order-1 items-center w-[${selectorSize}px] lg:h-[540px] gap-7 mt-5`}>
                <h2 className="text-xl font-bold">YOU PICKED</h2>
                <div className="flex items-center justify-center"
                    style={{width: `${selectorSize}px`, aspectRatio: "1/1"}}>
                    {!showUser && <div className="bg-blue-950/60 lg:w-[250px] lg:h-[250px] rounded-[px]"></div>}
                    {showUser && <Selector action={userPick} size={selectorSize} />}
                </div>
            </div>

            <div className={`flex flex-col items-center space-y-2 transform transition-all duration-300 ease-in-out origin-left order-3 ${showResult ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}>
                {<h3 className="text-4xl font-black px-3">{getResultText()}</h3>}
                <button onClick={resetGame} className="bg-white cursor-pointer rounded-xl text-md text-red-800 w-full py-3 font-black hover:bg-stone-200">
                    PLAY AGAIN
                </button>
            </div>

            <div className={`flex flex-col items-center w-[${selectorSize}px] order-2 gap-7 mt-5`}>
                <h2 className="text-xl font-bold">HOUSE PICKED</h2>
                 <div className="flex items-center justify-center"
                    style={{width: `${selectorSize}px`, aspectRatio: "1/1"}}>
                    {!showHouse && <div className="bg-blue-950/60 lg:w-[250px] lg:h-[250px] rounded-[125px]"></div>}
                    {showHouse && <Selector action={compPick} size={selectorSize} />}
                </div>
                
            </div>
        </section>
    )
}