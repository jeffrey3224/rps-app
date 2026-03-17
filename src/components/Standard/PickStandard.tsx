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
            <img src="/images/bg-triangle.svg" className="z-[10] absolute w-[50vw] sm:w-[350px] lg:w-[400px] mt-10 sm:mt-15 md:mt-20 xl:mt-30 left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%]"/>
            <section id="standard-game-play" className="absolute left-1/2 -translate-x-[50%] z-[20] top-1/2 -translate-y-[50%] mt-10 md:mt-15 xl:mt-25">
                <div className="w-[90vw] max-w-[900px] flex flex-wrap justify-center gap-x-15 gap-y-7 md:gap-x-30 md:gap-y-15 mx-auto">
                    <button onClick={() => handleSelection("paper")}><Selector action="paper" size={selectorSize}/></button>
                    <button onClick={() => handleSelection("scissors")}><Selector action="scissors" size={selectorSize}/></button>
                    <button onClick={() => handleSelection("rock")}><Selector action="rock" size={selectorSize}/></button>
                </div>
            </section>
        </>
    )
}