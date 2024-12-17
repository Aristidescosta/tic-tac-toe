import { useBoard } from '@/hooks/useBoard';
import React, { useState } from 'react'

interface ISquareProps {
    borders: {
        top?: boolean;
        right?: boolean;
        bottom?: boolean;
        left?: boolean;
    };
    value: string | null;
    onSquareClick: () => void;
    fill?: boolean
}

export const Square: React.FC<ISquareProps> = ({ borders, value, onSquareClick, fill }) => {
    const [hoverValue, setHoverValue] = useState<string | null>(null);
    const xIsNext = useBoard(state => state.xIsNext)
    return (
        <button
            onClick={onSquareClick}
            data-border-top={borders.top}
            data-border-bottom={borders.bottom}
            data-border-right={borders.right}
            data-border-left={borders.left}
            data-fill={fill}
            data-x={value?.toLocaleUpperCase() === "X"}
            onMouseEnter={() => {
                if (value === null) setHoverValue(xIsNext ? "X" : "O");
            }}
            onMouseLeave={() => setHoverValue(null)}
            className={`${value === null
                ? "hover:bg-[#53354a]"
                : ""
                } data-[x=true]:text-[#ffe59d] data-[fill=true]:bg-error data-[fill=true]:text-background flex items-center justify-center data-[border-top=true]:border-t-2 data-[border-right=true]:border-r-2 data-[border-bottom=true]:border-b-2 data-[border-left=true]:border-l-2 border-error float-left text-[5rem] leading-3 font-bold h-24 w-24 -mx-[1px] p-0 text-[#6dbd8a] text-center`}
        >{value || hoverValue}</button>
    )
}
