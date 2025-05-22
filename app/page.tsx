import React from 'react';

interface User {
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
      <h1>Placeholder Table fetching data from jsonplaceholder:</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
