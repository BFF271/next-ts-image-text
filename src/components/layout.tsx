import React from 'react';

export default function Layout({ children }: {
    children: React.ReactNode,
}) {

    return (
        <div>
            <div className={`min-h-screen flex flex-row justify-center items-center`}>
                <main className="w-full">{children}</main>
            </div>
        </div>
    )
};