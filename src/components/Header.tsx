import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

type Props = {
  score: number
  resetScore: () => void
}

export default function Header({ score, resetScore }: Props) {

    const [scoreResetter, setScoreResetter] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const [width, setWidth] = useState(0);

    const location = useLocation();

    const gamePlay = location.pathname.includes("bonus")
                      ? "bonus"
                      : "standard";

    console.log(gamePlay);

    useEffect(() => {
      window.addEventListener("resize", () => {
        setWidth(window.innerWidth);

        if (window.innerWidth > 768) {
          setIsMobile(false);
        }

        return () => {
          window.removeEventListener;
        }
      })
    }, [width])

    const scoreMilestone = (score: number) => {
        if (score > 0 && score % 5 === 0) {
            setScoreResetter(true);

            const timer = setTimeout(() => {
                setScoreResetter(false)
            }, 5000);

            return () => {
                clearTimeout(timer);
            }
        }
    }

    useEffect(() => {
        scoreMilestone(score);
    }, [score]);


  return (
    <header className="w-[clamp(250px,60vw,700px)] mx-auto border border-white flex items-center justify-between rounded-xl">

    {gamePlay === "standard" ? 
      <img
        src="/images/logo.svg"
        className="w-[clamp(80px,10vw,150px)] pl-2"
      />
      :
      <img  
        src="/images/logo-bonus.svg"
        className="w-[clamp(60px,10vw,120px)] pl-2"
      />

    }

      <div className="relative group bg-white w-[clamp(80px,12vw,140px)] rounded-xl flex py-2 px-5 flex-col items-center justify-center">

        <h2 className="text-sm md:text-base text-blue-950 font-bold">
          SCORE
        </h2>

        <p className="text-3xl md:text-5xl xl:text-6xl text-black font-black">
          {score}
        </p>

        {isMobile ? 
          <button 
            onClick={resetScore}
            className="absolute inset-0"
          >
            
          </button> 
          
          :

          <button
            onClick={resetScore}
            className={`absolute inset-0 ${scoreResetter ? "block text-sm px-2 font-[600]" : "hidden text-lg/5 font-bold"} group-hover:flex items-center justify-center bg-black/80 rounded-xl cursor-pointer transition-all duration-300 ease-in-out`}
          >
            {scoreResetter ? "Click to Clear Score" : "CLEAR SCORE"}
          </button>
        }
      </div>

    </header>
  )
}