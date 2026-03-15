import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function BackToHome() {

   
    return (
        <div className="absolute top-15 left-15">
            <Link to="/" className="flex flex-row justify-center items-center gap-3 text-lg border-[1px] border-white px-5 py-2 rounded-lg bg-white text-blue-900">
                <IoMdArrowRoundBack /> Back to Home 
           </Link>
            
        </div>
    )
}