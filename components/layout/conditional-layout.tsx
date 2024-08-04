'use client'

import { usePathname } from 'next/navigation';
import { SignInHeader } from '../sign-in/header';
import { Header } from '../header';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';

export const ConditionalLayout = () => {
    const pathname = usePathname();
    const router = useRouter()

    const cookies = parseCookies()

    if (!cookies['@token']) {
        router.replace('/sign-in')
    }
    return (
        <>
            {(pathname === "/sign-in" || pathname === "/sign-up" ? <SignInHeader /> : (<Header />))}
        </>
    )
};