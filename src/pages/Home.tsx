import { useEffect } from "react";
import ChooseGameplay from "../components/Modals/ChooseGameplay";

export default function Home() {

    useEffect(() => {
        document.title = "Rock, Paper, Scissors";
    }, []);


    return (
        <>
            <ChooseGameplay />
        </>
    )
}