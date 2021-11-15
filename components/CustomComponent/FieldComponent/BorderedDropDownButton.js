import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

export const BorderedDropDownButton = ({ options }) => {
    const [selected, setSelected] = useState(options[0])

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1 z-30">
                <Listbox.Button className="relative w-full py-[1.125rem] pl-6 text-left bg-white rounded-full border border-bordercolor focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 text-sm md:text-base font-karla font-bold text-neutral">
                    <span className="block truncate">{selected.label}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <img src='/ic-dropdown-arrow.svg' alt='ic-arrow' />
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
                    <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto bg-white rounded-xl shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm md:text-base text-neutral font-karla">
                        {options.map((option, idx) => (
                            <Listbox.Option
                                key={idx}
                                className={({ active }) =>
                                    `${active ? 'font-bold bg-primary bg-opacity-20' : 'font-normal'}
                                cursor-default select-none relative py-2 pl-6 pr-4`
                                }
                                value={option}
                            >
                                {({ selected, active }) => (
                                    <>
                                        <span
                                            className={`${selected ? 'font-bold' : 'font-normal'
                                                } block truncate`}
                                        >
                                            {option.label}
                                        </span>
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}
