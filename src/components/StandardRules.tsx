import { useState } from "react"

export default function StandardRules() {

    const [showModal, setShowModal] = useState(true);

    const handleClose = () => {
        setShowModal(false);
    }

    return (
        showModal && 
            (   <div className="w-full h-screen flex justify-center items-center bg-black bg/75">
                    <div className="bg-white p-10 rounded-2xl flex flex-col justify-end relative">
                        <h2 className="text-[rgb(137,131,142)] text-3xl font-bold mb-10">RULES</h2>
                        <img src="/images/image-rules.svg" className="w-[25vw]" />
                        <button onClick={handleClose} className="absolute top-5 right-5 cursor-pointer">
                            <img src="/images/icon-close.svg" width={22} />
                        </button>
                        
                    </div>
                </div>
            )
    )
}
