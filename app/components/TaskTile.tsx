import React, { PropsWithChildren } from 'react';
import { User } from '../page';

const TaskTile = ({ user }: { user: User }) => {
  return (
    <div className="bg-gray-300 p-2 m-1 rounded-md">
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default TaskTile;
