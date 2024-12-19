/* eslint-disable react-hooks/rules-of-hooks */

import { useBoard } from '@/hooks/useBoard';
import { Square } from '../square';

export const Board = () => {
    const squares = useBoard(state => state.squares);
    const handleSquareClick = useBoard(state => state.handleSquareClick);

    const getTheCorrectBorderSquare = (position: number) => {
        switch (position) {
            case 0:
                return { bottom: true, right: true }
            case 1:
                return { bottom: true, right: true, left: true }
            case 2:
                return { bottom: true, left: true }
            case 3:
                return { bottom: true, right: true, }
            case 4:
                return { bottom: true, right: true, left: true }
            case 5:
                return { bottom: true, left: true, }
            case 6:
                return { right: true }
            case 7:
                return { left: true, right: true, }

            default:
                return { left: true }
        }
    }

    const rows = [];
    const rowSize = 3;


    for (let i = 0; i < Object.keys(squares).length; i += rowSize) {
        //Agrupa os itens por linha
        const row = Object.entries(squares).slice(i, i + rowSize);
        rows.push(row);
    }

    return (
        <div>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map(([index, value]) => (
                        <Square
                            key={index}
                            value={value}
                            onSquareClick={() => handleSquareClick(parseInt(index))}
                            borders={getTheCorrectBorderSquare(parseInt(index))}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

