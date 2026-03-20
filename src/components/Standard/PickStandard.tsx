import { useEffect, useState } from "react";
import Selector from "../Selector";

type Props = {
    onSelect: (selection: string) => void
}

export default function PickStandard({onSelect}: Props) {

    const [selectorSize, setSelectorSize] = useState(0);

    const handleSelection = (selection: string) => {
        onSelect(selection)
    }

    const handleResize = () => {
        if (window.innerWidth < 576) {
            setSelectorSize(window.innerWidth * .35);
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

    return (
        <>
            <img src="/images/bg-triangle.svg" className="z-10 w-[50vw] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] pt-5 min-w-[180px] max-w-[270px]"/>

            <section id="standard-game-play" className="relative z-20 flex flex-col">
                <div className="w-full max-w-[900px] flex flex-wrap justify-center mx-auto gap-x-10">
                    <button onClick={() => handleSelection("paper")}><Selector action="paper" size={selectorSize}/></button>
                    <button onClick={() => handleSelection("scissors")}><Selector action="scissors" size={selectorSize}/></button>
                    <button onClick={() => handleSelection("rock")}><Selector action="rock" size={selectorSize}/></button>
                </div>

                
            </section>
        </>
    )
}