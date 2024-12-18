import { create } from 'zustand'

type Store = {
    squares: null[] | string[],
    xIsNext: boolean,
    handleSquareClick: (position: number) => void
    resetBoard: () => void,
    winner: null | string,
}

const INITIAL_DATA = {
    squares: Array(9).fill(null),
    xIsNext: true,
    winner: null,
}

export const useBoard = create<Store>()((set, get) => ({
    ...INITIAL_DATA,
    handleSquareClick: (position: number) => {
        const { squares, xIsNext } = get();
        if (squares[position] || calculateWinner(squares)) {
            console.log("Aqui mesmo já deveria funcionar")
            set((state) => ({ ...state, winner: calculateWinner(squares) }));
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
        set((state) => ({ ...state, squares: nextSquares, xIsNext: !xIsNext, winner: calculateWinner(nextSquares) }));
    },
    resetBoard: () => {
        set((state) => ({ ...state, ...INITIAL_DATA }));
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