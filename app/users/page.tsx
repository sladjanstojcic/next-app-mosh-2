import React, { Suspense } from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
    searchParams: {
        sortOrder: string;
    };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
    console.log('sortOrder', sortOrder);

    return (
        <>
            <h1>Users</h1>
            <Link className="btn" href="/users/new">
                New User
            </Link>
            <Suspense fallback={<div className="loader">Loading...</div>}>
                <UserTable sortOrder={sortOrder} />
            </Suspense>
        </>
    );
};

export default UsersPage;
