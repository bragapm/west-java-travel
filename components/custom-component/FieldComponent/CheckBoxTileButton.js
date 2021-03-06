import React from 'react'

export const CheckBoxTileButton = ({ activeValue, setactiveValue, value, title }) => {
    return (
        <div
            onClick={() => {
                if (!activeValue.includes(value)) {
                    setactiveValue([...activeValue, value]);
                } else {
                    var index = activeValue.indexOf(value);
                    if (index !== -1) {
                        activeValue.splice(index, 1);
                    }
                    setactiveValue([...activeValue]);
                }
            }}
            className='rounded-md hover:bg-primary hover:bg-opacity-10 cursor-pointer'>
            <input
                checked={activeValue.includes(value)}
                onChange={() => {}}
                type="checkbox"
                name='ayam'
                className='m-3 border-gray text-yellow rounded focus:ring-yellow cursor-pointer' />
            <label className='w-full mr-3 mt-3 mb-3 font-karla text-neutral text-base flex-none cursor-pointer'>{title}</label>
        </div>
    )
}
