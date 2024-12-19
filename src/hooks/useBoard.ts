import { PlayerType } from '@/types/Player'
import { create } from 'zustand'

type Store = {
    squares: null[] | string[],
    xIsNext: boolean,
    handleSquareClick: (position: number) => void
    resetBoard: () => void,
    winner: null | string,
    isDraw: boolean,
    players: PlayerType[],
    addPlayers: (players: PlayerType | PlayerType[]) => void,
    scoreboard: { playerX: number, playerO: number, draw: number }
}

const INITIAL_DATA = {
    squares: Array(9).fill(null),
    xIsNext: true,
    winner: null,
    isDraw: false,
    players: [],
    scoreboard: { playerX: 0, playerO: 0, draw: 0 }
}

export const useBoard = create<Store>()((set, get) => ({
    ...INITIAL_DATA,
    handleSquareClick: (position: number) => {
        const { squares, xIsNext, scoreboard } = get();
        if (squares[position] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (squares[position]) {
            return;
        }
        if (xIsNext) {
            nextSquares[position] = "X";
        } else {
            nextSquares[position] = "O";
        }
        if (calculateWinner(nextSquares)) {
            const winner = calculateWinner(nextSquares);
            switch (winner) {
                case "X":
                    scoreboard.playerX++;
                    break;
                default:
                    scoreboard.playerO++;
                    break;
            }
        }
        if (calculateIsDraw(nextSquares)) {
            scoreboard.draw++;
        }
        set((state) => ({ ...state, squares: nextSquares, xIsNext: !xIsNext, winner: calculateWinner(nextSquares), isDraw: calculateIsDraw(nextSquares) ,scoreboard: scoreboard, }));
    },
    resetBoard: () => {
        const { xIsNext, scoreboard } = get();
        set((state) => ({ ...state, ...INITIAL_DATA, xIsNext: !xIsNext, scoreboard }));
    },
    addPlayers: (player: PlayerType | PlayerType[]) => {
        const PLAYERS = Array.isArray(player) ? player : [player];
        set((state) => ({ ...state, players: [...state.players, ...PLAYERS] }))
    },
}))

const calculateWinner = (squares: null[] | string[]) => {
    const LINES = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < LINES.length; i++) {
        const [a, b, c] = LINES[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const calculateIsDraw = (squares: null[] | string[]) => {
    const isDraw = squares.every(square => square !== null);
    if (isDraw) {
        return true;
    }
    return false;
}