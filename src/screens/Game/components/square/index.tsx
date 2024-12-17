import React from 'react'

interface ISquareProps {
    borders: {
        top?: boolean;
        right?: boolean;
        bottom?: boolean;
        left?: boolean;
    };
    value: string | null;
    onSquareClick: () => void;
}

export const Square: React.FC<ISquareProps> = ({ borders, value, onSquareClick }) => {

    return (
        <button
            onClick={onSquareClick}
            data-border-top={borders.top}
            data-border-bottom={borders.bottom}
            data-border-right={borders.right}
            data-border-left={borders.left}
            className='flex items-center justify-center data-[border-top=true]:border-t-2 data-[border-right=true]:border-r-2 data-[border-bottom=true]:border-b-2 data-[border-left=true]:border-l-2 border-error float-left text-[5rem] leading-3 font-bold h-24 w-24 -mx-[1px] p-0 text-center'
        >{value}</button>
    )
}
