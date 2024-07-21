'use client'

import { usePathname } from 'next/navigation';
import { SignInHeader } from '../sign-in/header';
import { Header } from '../header';

export const ConditionalLayout = () => {
    const pathname = usePathname();
    return (
        <>
            {(pathname === "/sign-in" ? <SignInHeader /> : (<Header />))}
        </>
    )
};