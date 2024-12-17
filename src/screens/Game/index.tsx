import React from 'react'
import { Header } from './components/header'
import { Board } from './components/board'
import { Switch } from './components/Switch'
import { useBoard } from '@/hooks/useBoard'

export const Game = () => {
    const xIsNext = useBoard(state => state.xIsNext)
    return (
        <>
            <Header />
            <main>
                <section className='w-full flex justify-center mt-4'>
                    <span>2 - 3</span>
                </section>
                <section className='w-full flex flex-col items-center justify-center'>
                    <Board />
                    <div className='flex items-center justify-around mt-5 w-full'>
                        <div className="relative w-28 h-28 flex items-center justify-center">
                            <div data-x-is-next={xIsNext} className="absolute top-1/2 left-0 w-full h-2 bg-border data-[x-is-next=true]:bg-error transform -translate-y-1/2 rotate-45"></div>
                            <div data-x-is-next={xIsNext} className="absolute top-1/2 left-0 w-full h-2 bg-border data-[x-is-next=true]:bg-error transform -translate-y-1/2 -rotate-45"></div>
                            <span data-x-is-next={xIsNext} className='data-[x-is-next=true]:text-text font-bold z-50 text-3xl'>Ali</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div data-x-is-next={xIsNext} className="relative w-28 rounded-full border-border data-[x-is-next=false]:border-error border-8 h-28 flex items-center justify-center">
                                <span className='z-50 text-3xl font-bold'>Ali</span>
                            </div>
                        </div>
                    </div>
                    <Switch />
                </section>
            </main>
        </>
    )
}
