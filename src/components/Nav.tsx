
type Props = {
    score: number;
}

export default function Nav({score}: Props) {
    return (
        <nav id="score-header" className="w-[50vw] max-w-[800px] min-w-[500px] mx-auto my-15 p-7 border-1 border-white flex flex-row justify-between rounded-xl">
                <img src="/images/logo.svg" />
                <div id="score-box" className="bg-white w-[140px] rounded-xl flex p-2 flex-col items-center justify-center">
                    <h2 className="text-blue-800">SCORE</h2>
                    <p className="text-7xl text-black">{score}</p>
                </div>
        </nav>
    )
        
}