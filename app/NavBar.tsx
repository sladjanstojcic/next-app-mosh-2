import React from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/authOptions';

const NavBar = async () => {
    const session = (await getServerSession(authOptions)) || ({} as any);

    return (
        <div className="flex bg-slate-200 p-5">
            <Link href="/" className="mr-5">
                Home
            </Link>
            <Link href="/users" className="mr-5">
                Users
            </Link>
            {!Object.keys(session).length ? (
                <Link href="/api/auth/signin" className="mr-5">
                    Sign In
                </Link>
            ) : null}
            {Object.keys(session).length ? (
                <>
                    <div className="mr-5">{session!.user!.name}</div>
                    <Link href="/api/auth/signout" className="mr-5">
                        Sign Out
                    </Link>
                </>
            ) : null}
        </div>
    );
};

export default NavBar;
