type Props = {
    onSelect: (showRules: boolean) => void
    showRules: boolean;
}

export default function StandardRules({onSelect, showRules}: Props) {


    const handleClose = () => {
        onSelect(false);
    }

    return (
        showRules && 
            (   <div className="z-100 absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50">
                    <div className="bg-white p-10 rounded-2xl flex flex-col justify-end relative">
                        <h2 className="text-[rgb(137,131,142)] text-3xl font-bold mb-10">RULES</h2>
                        <img src="/images/image-rules.svg" className="w-[60vw] md:w-[25vw] min-w-[200px] max-w-[400px]" />
                        <button onClick={handleClose} className="absolute top-5 right-5 cursor-pointer">
                            <img src="/images/icon-close.svg" width={22} />
                        </button>
                    </div>
                </div>
            )
    )
}
