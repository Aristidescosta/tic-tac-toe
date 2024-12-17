import { PlayerType } from '@/types/Player'
import { create } from 'zustand'

type Store = {
    players: PlayerType[],
    addPlayers: (players: PlayerType | PlayerType[]) => void
}

const INITIAL_DATA = {
    players: [],
}

export const usePlayers = create<Store>()((set) => ({
    ...INITIAL_DATA,
    addPlayers: (player: PlayerType | PlayerType[]) => {
        const PLAYERS = Array.isArray(player) ? player : [player];
        set((state) => ({ ...state, players: [...state.players, ...PLAYERS] }))
    },
}))