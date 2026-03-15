import { Link } from "react-router-dom";



export default function ChooseGameplay() {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center bg-black/75">
            <div className="bg-white w-[700px] p-10 rounded-2xl flex flex-col justify-center items-center relative">
                <h2 className="text-[rgb(137,131,142)] text-3xl font-bold mb-4 text-center">CHOOSE YOUR GAME</h2>
                <div className="bg-main-purple w-16 h-1 mb-10"></div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <button className="w-[25vw] min-w-[310px] bg-main-purple text-white px-7 py-3 rounded-xl">
                        <Link to="/standard"><p>STANDARD <br></br>Rock - Paper - Scissors</p></Link>
                    </button>
                    <button className="w-[25vw] min-w-[310px] bg-main-purple text-white px-7 py-3 rounded-xl">
                        <Link to="/spock"><p>BONUS <br></br>Rock - Paper - Scissors - Lizard - Spock</p></Link>
                    </button>
                </div>
            </div>
        </div>
    )
}