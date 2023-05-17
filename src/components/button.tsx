import React from 'react';
import LoadingDots from './loadingDots';

export default function Button({ children, isCta, isLoading, ...props }: {
    children: React.ReactNode;
    isCta?: boolean;
    isLoading?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    isShort?: boolean;
    isWide?: boolean;
}) {

    let colorClass = isCta ? 'bg-second text-fifth' : 'bg-first text-[#ffffff]';

    return (
        <button
            className={`${props.isShort ? 'max-w-[8rem] w-full' : props.isWide ? 'min-w-[24rem]' : 'w-full min-w-[8rem]'} h-full p-2 min-h-[2rem] max-h-[2rem] ${colorClass} cursor-pointer text-center inline-flex items-center justify-center text-xl font-extrabold border border-transparent rounded-lg focus:outline-none hover:opacity-80 focus:opacity-80 ${props.className}`}
            type={props.type} onClick={props.onClick} disabled={isLoading}
        >
            {isLoading ? <LoadingDots color="white" style="large" /> : children}
        </button>
    )
};