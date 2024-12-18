import { useBoard } from '@/hooks/useBoard'
import { Square } from '../square';

export const Board = () => {
    const squares = useBoard(state => state.squares);
    const handleClick = useBoard(state => state.handleSquareClick);

    return (
        <div>
            <div>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} borders={{ bottom: true, right: true }} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} borders={{ bottom: true, right: true, left: true }} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} borders={{ bottom: true, left: true }} />
            </div>
            <div>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} borders={{ bottom: true, right: true, }} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} borders={{ bottom: true, right: true, left: true }} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} borders={{ bottom: true, left: true, }} />
            </div>
            <div>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} borders={{ right: true, }} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} borders={{ left: true, right: true, }} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} borders={{ left: true, }} />
            </div>
        </div>
    )
}


