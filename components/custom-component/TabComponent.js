import { Tab } from '@headlessui/react'
import { useState } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const TabComponent = ({ labels, children, labelsClassName, childrenClassName, className }) => {
    const [activeIndex, setactiveIndex] = useState('w-0')
    return (
        <Tab.Group
            as='div'
            className={`mt-8 flex flex-col ${className ?? ''}`}
            onChange={(index) => {
                switch (index) {
                    case 0:
                        setactiveIndex('w-0');
                        break;
                    case 1:
                        setactiveIndex('w-1/3');
                        break;
                    case 2:
                        setactiveIndex('w-2/3');
                        break;
                    default:
                        setactiveIndex('w-0');
                }
            }}>
            <div className={`${labelsClassName ?? ''}`}>
                <Tab.List className={`w-full flex flex-row font-karla text-sm md:text-bas`}>
                    {labels.map((label, idx) => {
                        return <Tab key={idx} className={({ selected }) => classNames = (`w-1/3 pb-3 ${selected ? 'text-primary font-bold' : 'text-neutral font-normal'} w-full `)}>{label}</Tab>
                    })}
                </Tab.List>
                <div className='flex flex-row border-b border-bordercolor'>
                    <div className={`${activeIndex} transition-all duration-300 ease-in-out`} />
                    <div className={`w-1/3 h-1 bg-primary rounded-full`} />
                </div>
            </div>
            <Tab.Panels className={`${childrenClassName ?? ''}`}>
                {children.map((child, idx) => {
                    return <Tab.Panel key={idx}>{child}</Tab.Panel>;
                })}
            </Tab.Panels>
        </Tab.Group>
    )
}
