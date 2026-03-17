type Props = {
  score: number
  resetScore: () => void
}

export default function Header({ score, resetScore }: Props) {
  return (
    <header className="w-[clamp(250px,60vw,700px)] mx-auto mt-10 md:my-10 p-2 md:p-3 border border-white flex items-center justify-between rounded-xl">

      <img
        src="/images/logo.svg"
        className="w-[clamp(80px,10vw,150px)]"
      />

      <div className="relative group bg-white w-[clamp(80px,12vw,140px)] rounded-xl flex py-2 px-5 flex-col items-center justify-center">

        <h2 className="text-sm md:text-base text-blue-950 font-bold">
          SCORE
        </h2>

        <p className="text-3xl md:text-5xl xl:text-6xl text-black font-black">
          {score}
        </p>

        <button
          onClick={resetScore}
          className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/80 font-bold text-lg rounded-xl cursor-pointer"
        >
          CLEAR SCORE
        </button>

      </div>
    </header>
  )
}