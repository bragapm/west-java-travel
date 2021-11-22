import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Link from 'next/link';
import MemoIcArrowIos from '../../custom-icons/IcArrowIos';

export const NavBarDropDownButton = ({ options, className, title, activePage, setisShowMobileNavOptions, arrowClassName }) => {
    const [selected, setSelected] = useState(options[0])

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className={`relative z-30`}>
                <Listbox.Button className={`${className ?? ''} uppercase ring-transparent flex flex-row items-center`}>
                    {title}
                    <MemoIcArrowIos className={`ml-2 ${arrowClassName}`} />
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
                    <Listbox.Options className="absolute w-[230px] -right-12 rounded-lg mt-1 overflow-auto bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm md:text-base text-neutral font-karla">
                        <div className='flex flex-col divide-y divide-bordercolor'>
                            {options.map((option, idx) => (
                                <Listbox.Option
                                    key={idx}
                                    value={option}
                                >
                                    <Link href={option.href}>
                                        <a
                                            onClick={() => {
                                                setisShowMobileNavOptions(false);
                                            }}
                                            className={`${activePage == option.label ? 'font-bold text-primary' : 'font-normal text-neutral'
                                                } block truncate font-karla uppercase text-sm md:text-base p-2.5 md:p-4`}
                                        >
                                            {option.label}
                                        </a>
                                    </Link>
                                </Listbox.Option>
                            ))}
                        </div>
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}
