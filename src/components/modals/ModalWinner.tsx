import { useBoard } from "@/hooks/useBoard";
import { useEffect } from "react";


export const ModalWinner = () => {
    const players = useBoard(state => state.players)
    const winner = useBoard(state => state.winner)
    const isDraw = useBoard(state => state.isDraw)

    const onRestart = useBoard(state => state.resetBoard)

    const showWinnerName = () => {
        for (const player of players) {
            if (player.mark.toUpperCase() === winner) return player.name;
        }
        return winner;
    }

    useEffect(() => {
        setTimeout(() => {
            onRestart()
        }, 3000)
    }, [])

    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#2b2e4ace]'>
            <div className='motion-preset-slide-right motion-duration-700 bg-outline min-h-36 w-full shadow-sm border-y-2 border-darkError shadow-darkError text-4xl p-5 line-clamp-3'>
                <p className="motion-scale-in-[1] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier line-clamp-2 ">

                    {isDraw &&
                        <span>We have a draw</span>
                    }
                    {winner &&
                        <>
                            <span className='font-bold'>
                                {showWinnerName()}{" "}
                            </span>
                            <span>takes the game!</span>
                        </>
                    }
                </p>
            </div>
        </div>
    )
}