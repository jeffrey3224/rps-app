import { useEffect, useState } from "react";
import StandardRules from "../components/Standard/StandardRules";
import BackToHome from "../components/BackToHome";
import PickStandard from "../components/Standard/PickStandard";
import ResultStandard from "../components/Standard/ResultStandard";
import Header from "../components/Header";

export default function Standard() {

    const [score, setScore] = useState<number>(0);
    const [userSelection, setUserSelection] = useState<string | null>(null);
    const [computerSelection, setComputerSelection] = useState<string | null>(null);
    const [winner, setWinner] = useState<string | null>(null);
    const [showRules, setShowRules] = useState(true);

    useEffect(() => {
    document.title = "Rock, Paper, Scissors | Standard";

    const storedScore = Number(localStorage.getItem('userScore-standard'))

    if (storedScore > 0) {
        setScore(storedScore);
    }
    }, []);

    const getRandomNumber = () => {
        const number = Math.floor(Math.random() * 3);

        return number;
    }

    useEffect(() => {
        if (!userSelection) return;

        const computerPick = getRandomNumber();
        const choices = ["rock", "paper", "scissors"];
        const comp = choices[computerPick];

        setComputerSelection(comp);

        if (
            (userSelection === "paper" && comp === "rock") ||
            (userSelection === "rock" && comp === "scissors") ||
            (userSelection === "scissors" && comp === "paper")
        ) {
            setWinner("user");
            setTimeout(() => setScore((s) => s + 1), 2000);
            
        } 
        else if (userSelection === comp) {
            setWinner("draw");
        } 
        else {
            setWinner("computer");
            setTimeout(() => setScore((s) => Math.max(0, s - 1)), 2000);
        }

    }, [userSelection]);

    useEffect(() => {
        localStorage.setItem('userScore-standard', JSON.stringify(score));
    }, [score]);
   

    const handleReset = () => {
        setWinner(null);
        setComputerSelection(null);
        setUserSelection(null);
    }

    const handleShowRules = () => {
        setShowRules((rules) => !rules);
    }

    const handleScoreReset = () => {
        setScore(0);
        localStorage.setItem('userScore-standard', JSON.stringify(score));
    }

    return (
        <div className="flex flex-col flex-1">

            <Header score={score} resetScore={handleScoreReset}/>

            <main className="relative w-full h-full flex flex-col items-center justify-center">
                { !userSelection && <PickStandard onSelect={setUserSelection} />}
                { userSelection && computerSelection && winner && <ResultStandard userPick={userSelection} compPick={computerSelection} winner={winner} resetGame={handleReset}/>}
    
            </main>

            <footer className="flex flex-row gap-5 justify-center">
                <BackToHome />
                <button onClick={handleShowRules} className="border-2 border-white rounded-xl px-10 cursor-pointer hover:bg-white hover:text-blue-900 font-black">
                    RULES
                </button>
            </footer>

            {showRules && <StandardRules onSelect={setShowRules} showRules={showRules}/> }

        </div>
    )
}