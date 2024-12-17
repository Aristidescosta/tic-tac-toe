import { GameModeType } from '@/types'
import React from 'react'


interface IInputRatioProps {
    value: string,
    onChange: (value: GameModeType) => void,
    checked: boolean
    id: string
}
export const InputRatio: React.FC<IInputRatioProps> = ({ checked, onChange, value, id }) => {
    return (
        <input data-checked={checked} className='w-32 bg-outline font-bold p-2 outline-none rounded-sm text-center data-[checked=true]:bg-error data-[checked=true]:text-darkError' type='text' readOnly onClick={() => onChange({ id, label: value })} id={id} name='gameMode' value={value} defaultChecked={checked} />
    )
}
