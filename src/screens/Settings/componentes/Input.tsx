import React from 'react'

interface IInputProps {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    value: string;
}

export const Input: React.FC<IInputProps> = ({ value, onChange }) => {
    return (
        <input type="text" value={value} onChange={onChange} className='border border-1 border-error bg-transparent rounded-sm p-2 w-full font-normal focus:outline-error' />
    )
}
