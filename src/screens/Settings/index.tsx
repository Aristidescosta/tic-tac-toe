import { useNavigate } from 'react-router'
import { useState } from 'react'

import { InputRatio } from './componentes/InputRatio'
import { GAME_MODES } from '@/utils/constants'
import { useBoard } from '@/hooks/useBoard'
import { PlayerType } from '@/types/Player'
import { GameModeType } from '@/types'

export const Settings = () => {
    const [selectedGameMode, setSelectedGameMode] = useState(GAME_MODES[0])
    const [playersData, setPlayersData] = useState<PlayerType[]>([
        {
            mark: "x",
            name: "X",
            point: 0
        },
        {
            mark: "o",
            name: "O",
            point: 0
        }
    ])

    const addPlayers = useBoard(state => state.addPlayers)
    const navigate = useNavigate();

    const handlePlayerInputChange = (playerIndex: number, value: string, mark: string) => {
        const newPlayersData = [...playersData]
        newPlayersData[playerIndex] = { ...newPlayersData[playerIndex], name: value, mark }
        setPlayersData(newPlayersData)
    }

    const handleGameModeChange = (value: GameModeType) => {
        setSelectedGameMode(value)
    }

    const handleSubmit = () => {
        //const NEW_PLAYERS_DATA: PlayerType[] = [{ ...playersData[0], name: playersData[0].name.slice(0, 5) }, { ...playersData[1], name: playersData[1].name.slice(0, 5) }]
        addPlayers(playersData)
        navigate("/game")
    }

    return (
        <div className='h-screen w-screen flex items-center flex-col justify-center bg-background text-error font-bold overflow-hidden gap-5'>
            <h1 className='font-bold text-3xl'>Tic Tac Toe.</h1>
            <form action="" className='w-full flex items-center flex-col justify-center gap-5' >
                <div className='border w-5/6 border-1 h-auto p-5 gap-5 flex flex-col'>
                    <div className='flex flex-col gap-4'>
                        <p>Game mode</p>
                        <div className='flex gap-4'>
                            {
                                GAME_MODES.map((mode) => (
                                    <InputRatio
                                        checked={selectedGameMode.id === mode.id}
                                        id={mode.id}
                                        key={mode.id}
                                        value={mode.label}
                                        onChange={handleGameModeChange}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <p>Player names</p>
                        <div className='flex gap-4 w-full'>
                            <div className='flex flex-col gap-2 w-full'>

                                <div className='flex flex-col w-full'>
                                    <label className='font-normal' htmlFor="player1">Player 1 - X</label>
                                    <input type="text" value={playersData[0].name} onChange={(e) => handlePlayerInputChange(0, e.target.value, "x")} className='border border-1 border-error bg-transparent rounded-sm p-2 w-full font-normal focus:outline-error' />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label className='font-normal' htmlFor="player1">Player 2 - O</label>
                                    <input type="text" value={playersData[1].name} onChange={(e) => handlePlayerInputChange(1, e.target.value, "o")} className='border border-1 border-error bg-transparent rounded-sm p-2 w-full font-normal focus:outline-error' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type='button' onClick={handleSubmit} className='rounded-md w-5/6 p-2 bg-error text-background'>Let the games begin!</button>
            </form>
        </div>
    )
}
