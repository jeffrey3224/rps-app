import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function BackToHome() {

   
    return (
        <div className="">
            <Link to="/" className="flex flex-row justify-center items-center text-md border-[1px] border-white px-7 py-3 rounded-lg bg-white text-blue-950 font-black hover:bg-stone-200">
                <div className="flex flex-row justify-center items-center gap-1"><IoMdArrowRoundBack />HOME</div>
           </Link>
            
        </div>
    )
}