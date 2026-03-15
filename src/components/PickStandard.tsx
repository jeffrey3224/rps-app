import Selector from "./Selector";

type Props = {
    onSelect: (selection: string) => void
}

export default function PickStandard({onSelect}: Props) {

    const handleSelection = (selection: string) => {
        onSelect(selection)

        console.log(selection);
    }

    return (
        <>
            <img src="/images/bg-triangle.svg" className="z-[10] absolute w-[400px] mt-30 left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%]"/>
            <section id="standard-game-play" className="absolute left-1/2 -translate-x-[50%] z-[20] top-1/2 -translate-y-[50%] mt-25">
                <div className="w-[80vw] max-w-[900px] flex flex-wrap justify-center gap-x-30 gap-y-15 mx-auto">
                    <button onClick={() => handleSelection("paper")}><Selector action="paper" size={250}/></button>
                    <button onClick={() => handleSelection("scissors")}><Selector action="scissors" size={250}/></button>
                    <button onClick={() => handleSelection("rock")}><Selector action="rock" size={250}/></button>
                </div>
            </section>
        </>
    )
}