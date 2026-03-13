


export default function ChooseGameplay() {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-black bg/75">
                    <div className="bg-white p-10 rounded-2xl flex flex-col justify-end relative">
                        <h2 className="text-[rgb(137,131,142)] text-3xl font-bold mb-10">CHOOSE YOUR GAME</h2>
                        <div>
                            <button className="border-2 border-main-purple text-main-purple">Rock, Paper, Scissors</button>
                            <button className="border-2 border-main-purple text-main-purple">Rock, Paper, Scissors, Lizard, Spock</button>

                        </div>
                    </div>
                </div>
    )
}