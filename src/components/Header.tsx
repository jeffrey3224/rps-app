import BackToHome from "./BackToHome";


type Props = {
    score: number;
    resetScore: () => void;
}


export default function Header({score, resetScore}: Props) {
    return (
        <header id="score-header" className="w-[70vw] md:w-[50vw] max-w-[300px] md:max-w-[800px] md:min-w-[500px] mx-auto mt-10 md:my-15 p-2 md:p-7 border-1 border-white flex flex-row items-center justify-between rounded-xl">
                <img src="/images/logo.svg" className="w-[80px] lg:w-[25vw]"/>
                <div id="score-box" className="relative group bg-white w-[70px] md:w-[140px] rounded-xl flex p-2 flex-col items-center justify-center">
                    <h2 className="text-sm md:text-base text-blue-950 font-bold">SCORE</h2>
                    <p className="text-4xl md:text-7xl text-black font-black">{score}</p>
                    <button onClick={resetScore} className="absolute hidden group-hover:block w-full h-full bg-black/80 font-bold text-lg rounded-xl cursor-pointer">
                        CLEAR SCORE
                    </button>
                </div>
        </header>
    )
        
}