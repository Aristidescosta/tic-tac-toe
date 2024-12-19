import { Switch } from './components/Switch'
import { Header } from './components/header'
import { useBoard } from '@/hooks/useBoard'
import { Board } from './components/board'
import { ModalWinner } from '@/components'

export const Game = () => {
    const xIsNext = useBoard(state => state.xIsNext)
    const winner = useBoard(state => state.winner)
    const isDraw = useBoard(state => state.isDraw)
    const players = useBoard(state => state.players)
    const scoreboard = useBoard(state => state.scoreboard)
    const X_PLAYER = players[0]
    const O_PLAYER = players[1]
    return (
        <>
            <Header />
            <main>
                <section className='w-full flex justify-center mt-4'>
                    <span>{`${scoreboard.playerX} - ${scoreboard.playerO}`}</span>
                </section>
                <section className='w-full flex flex-col items-center justify-center'>
                    <Board />
                    <div className='flex items-center justify-around mt-5 w-full'>
                        <div className="relative w-28 h-28 flex items-center justify-center">
                            <div data-x-is-next={xIsNext} className="absolute data-[x-is-next=true]:motion-safe:animate-pulse top-1/2 left-0 w-full h-2 bg-border data-[x-is-next=true]:bg-error transform -translate-y-1/2 rotate-45"></div>
                            <div data-x-is-next={xIsNext} className="absolute data-[x-is-next=true]:motion-safe:animate-pulse top-1/2 left-0 w-full h-2 bg-border data-[x-is-next=true]:bg-error transform -translate-y-1/2 -rotate-45"></div>
                            <span data-x-is-next={xIsNext} className='data-[x-is-next=true]:text-text font-bold z-50 text-3xl line-clamp-1'>{X_PLAYER?.name}</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div data-x-is-next={xIsNext} className="relative data-[x-is-next=false]:motion-safe:animate-pulse w-28 rounded-full border-border data-[x-is-next=false]:border-error border-8 h-28 flex items-center justify-center">
                                <span className='z-50 text-3xl font-bold line-clamp-1'>{O_PLAYER?.name}</span>
                            </div>
                        </div>
                    </div>
                    <Switch />
                </section>
                {(winner || isDraw) && <ModalWinner />}
            </main>
        </>
    )
}
