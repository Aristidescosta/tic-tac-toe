import { create } from 'zustand'

type Store = {
    squares: null[] | string[],
    xIsNext: boolean,
    handleSquareClick: (position: number) => void
    resetBoard: () => void,
}

const INITIAL_DATA = {
    squares: Array(9).fill(null),
    xIsNext: true,
}

export const useBoard = create<Store>()((set, get) => ({
    ...INITIAL_DATA,
    handleSquareClick: (position: number) => {
        const { squares, xIsNext } = get();
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[position] = "X";
        } else {
            nextSquares[position] = "O";
        }
        set((state) => ({ ...state, squares: nextSquares, xIsNext: !xIsNext }));
    },
    resetBoard: () => {
        set((state) => ({ ...state, ...INITIAL_DATA }));
    },
}))