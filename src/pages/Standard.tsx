import { useEffect, useState } from "react";
import StandardRules from "../components/StandardRules";
import Nav from "../components/Nav";
import BackToHome from "../components/BackToHome";
import PickStandard from "../components/PickStandard";
import ResultStandard from "../components/ResultStandard";

export default function Standard() {

    const [score, setScore] = useState<number>(0);
    const [userSelection, setUserSelection] = useState<string | null>(null);
    const [computerSelection, setComputerSelection] = useState<string | null>(null);
    const [winner, setWinner] = useState<string | null>(null);
    const [showRules, setShowRules] = useState(true);

    const getRandomNumber = () => {
        const number = Math.floor(Math.random() * 3);
        console.log(number);

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
        setScore((s) => s + 1);
    } 
    else if (userSelection === comp) {
        setWinner("draw");
    } 
    else {
        setWinner("computer");
        setScore((s) => Math.max(0, s - 1));
    }

}, [userSelection]);

 const handleReset = () => {
        setWinner(null);
        setComputerSelection(null);
        setUserSelection(null);
    }

    return (
        <>
        <div className="relative w-full h-[100vh] bg-radial from-[hsl(214,47%,23%)] to-[hsl(237,48%,15%)]">
            <Nav score={score} />
            <BackToHome />

            { !userSelection && <PickStandard onSelect={setUserSelection} />}
            { userSelection && computerSelection && winner && <ResultStandard userPick={userSelection} compPick={computerSelection} winner={winner} resetGame={handleReset}/>}
        </div>
        {showRules && <StandardRules onSelect={setShowRules} showRules={showRules}/> }
        </>
    )
}