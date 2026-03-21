import { useEffect, useState } from "react";
import Selector from "../Selector";

type Props = {
    onSelect: (selection: string) => void
}

export default function PickBonus({onSelect}: Props) {

    const [selectorSize, setSelectorSize] = useState(0);

    const standardOptions = [
        "scissors",
        "spock",
        "paper",
        "lizard",
        "rock"
    ];

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

    const handleShape = (i: number) => {
        if (i === 0) {
            return "col-span-2 flex justify-center -mb-10"
        }

        else if (i === 1 || i === 4) {
            return "flex justify-start"
        }

        else if (i === 2 || i === 3) {
            return "flex justify-end"
        }
    }

    return (
        <>
            <img src="/images/bg-pentagon.svg" className="z-10 w-[50vw] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] pt-5 min-w-[180px] max-w-[270px]"/>

            <section id="standard-game-play" className="relative z-20 w-full">
                <div className="w-full grid grid-rows-3 gap-2">
                    {standardOptions.map((option, i) => {
                        return (
                            <div className={handleShape(i)}>
                                <button onClick={() => handleSelection(option)}>
                                    <Selector action={option} size={selectorSize}/>
                                </button>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}