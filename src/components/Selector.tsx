type Props = {
    action: string;
    size: number;
}
const elementTypes = [
    {
        type: "Rock",
        img: "/images/icon-rock.svg",
        color: "bg-red-500"
    },

    {
        type: "Paper",
        img: "/images/icon-paper.svg",
        color: "bg-blue-500"
    },

    {
        type: "Scissors",
        img: "/images/icon-scissors.svg",
        color: "bg-amber-300",
    }
]

export default function Selector({action, size}: Props) {

    const selected = elementTypes.find((e => e.type.toLowerCase() === action.toLowerCase()));

    const innerSize = size * 0.78;
    const width = size * 0.3;

    if (!selected) return;

    return (
            <div 
                className={`relative flex items-center group cursor-pointer justify-center ${selected.color}`}
                style={{width:`${size}px`, height: `${size}px`, borderRadius:`${size / 2}px`}}
            >
                <div 
                    className="flex items-center justify-center bg-white"
                    style={{width:`${innerSize}px`, height: `${innerSize}px`, borderRadius:`${innerSize / 2}px`}}
                >
                    <img src={`${selected.img}`} width={width}/>
                </div>

                {/* Tooltip */}
                <div className="absolute opacity-0 group-hover:opacity-100 bg-black/80 p-2 top-0 right-0 transition-opacity duration-300">
                    {selected.type}
                </div>
                
            </div>
            )
}