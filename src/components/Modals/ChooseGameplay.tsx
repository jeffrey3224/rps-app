import { Link } from "react-router-dom";



export default function ChooseGameplay() {
    return (
        <div className="w-full flex flex-1 justify-center items-center">
            <div className="bg-white w-[80%] max-w-[700px] p-10 rounded-2xl flex flex-col justify-center items-center">
                <h2 className="text-[rgb(137,131,142)] text-3xl font-bold mb-4 text-center">CHOOSE YOUR GAME</h2>
                <div className="bg-main-purple w-16 h-1 mb-10"></div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <button className="w-full min-w-[80px] max-w-[425px] md:min-w-[310px] bg-main-purple text-white px-7 py-3 rounded-xl">
                        <Link to="/standard"><h2 className="font-bold text-lg">STANDARD</h2><p className="hidden sm:block">Rock - Paper - Scissors</p></Link>
                    </button>
                    <button className="w-full min-w-[80px] max-w-[425px] md:min-w-[310px] bg-main-purple text-white px-7 py-3 rounded-xl">
                        <Link to="/bonus"><h2 className="font-bold text-lg">BONUS</h2><p className="hidden sm:block">Rock - Paper - Scissors - Lizard - Spock</p></Link>
                    </button>
                </div>
            </div>
        </div>
        
    )
}