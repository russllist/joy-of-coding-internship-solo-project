import React from 'react';
import TaskTile from './components/TaskTile';

export interface User {
  id: number;
  name: string;
  email: string;
}

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Track your to-do list</p>
      <br />
      <p>This is where the list of task tiles will go</p>
      <br />
      <h1>Placeholder Cards fetching data from jsonplaceholder:</h1>
      <div>
        {users.map((user) => (
          <TaskTile key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default page;
