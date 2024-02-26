import { sort } from 'fast-sort';
import Link from 'next/link';
import React from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'no-store',
    });
    const users: User[] = await res.json();

    const sortedUsers = sort(users).asc((user) =>
        sortOrder === 'name' ? user.name : user.email
    );

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>
                        <Link href="/users?sortOrder=name">User name</Link>
                    </th>
                    <th>
                        <Link href="/users?sortOrder=email">User email</Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
