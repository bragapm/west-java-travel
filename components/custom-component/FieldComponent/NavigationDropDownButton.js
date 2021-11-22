import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import MemoIcCirlceArrow from '../../custom-icons/IcCirlceArrow'


export const NavigationDropDownButton = ({ options, className }) => {
    const [selected, setSelected] = useState(options[0])

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className={`relative mt-1 z-30 ${className ?? ''}`}>
                <Listbox.Button className="relative w-full py-[1.125rem] pl-5 text-left bg-white rounded-full border border-bordercolor focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 text-sm md:text-base font-karla font-bold text-neutral">
                    <span className="uppercase font-karla text-dark font-bold">Table of content</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                        <MemoIcCirlceArrow className='text-primary rotate-90' />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Listbox.Options className="absolute w-full -top-3.5 mt-1 p-5 overflow-auto bg-white shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm md:text-base text-neutral font-karla">
                        <div className='uppercase font-karla text-dark font-bold flex flex-row justify-between pb-5 border-b border-bordercolor'>
                            Table of content
                            <MemoIcCirlceArrow className='text-primary -rotate-90' />
                        </div>
                        <div className='flex flex-col space-y-5 pt-5'>
                            {options.map((option, idx) => (
                                <Listbox.Option
                                    key={idx}
                                    className={({ active }) =>
                                        `${active ? 'font-bold' : 'font-normal'}
                                cursor-default select-none relative flex flex-row`
                                    }
                                    value={option}
                                >
                                    {({ selected, active }) => (
                                        <a href={option.href} className='flex flex-row'>
                                            <span className='font-montserrat text-[#000E22] text-opacity-50 text-sm font-bold pr-2.5'>0{idx + 1}</span>
                                            <span
                                                className={`${selected ? 'font-bold' : 'font-normal'
                                                    } block truncate font-karla text-neutral`}
                                            >
                                                {option.label}
                                            </span>
                                        </a>
                                    )}
                                </Listbox.Option>
                            ))}
                        </div>
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}
