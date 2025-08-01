import React from 'react';
import TaskTile from './components/TaskTile';

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Replay {
    id: number;
    url: string;
    thumbnail: string;
    title: string;
    host: string;
    date: Date;
    duration: Date;
    description: string;
}

const page = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: { revalidate: 10 },
    });
    const users: User[] = await res.json();
    // client side filtering
    const filtered: User[] = users.filter(
        (user) => user.name === 'Leanne Graham'
    );

    return (
        <div>
            <br />

            <h1>Placeholder Tiles fetching data from jsonplaceholder:</h1>
            <div>
                {users.map((user) => (
                    <TaskTile key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default page;
