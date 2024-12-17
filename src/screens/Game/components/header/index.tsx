import { BsArrowRepeat } from 'react-icons/bs'
import { IoIosSettings } from 'react-icons/io'

import { useBoard } from '@/hooks/useBoard'

export const Header = () => {
    const resetBoard = useBoard(state => state.resetBoard)
    return (
        <header className='p-5 border-b-2 border-border text-error'>
            <nav className='flex items-center justify-between'>
                <h1 className='text-3xl'>Tic Tac Toe</h1>
                <ul className='flex items-center gap-5 text-3xl'>
                    <li onClick={resetBoard} className='p-1 cursor-pointer border rounded-full border-error'><BsArrowRepeat /></li>
                    <li className='p-1 border rounded-full border-error'><a href="/settings"><IoIosSettings /></a></li>
                </ul>
            </nav>
        </header>
    )
}
