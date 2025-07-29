import React, { PropsWithChildren } from 'react';
import { Replay } from '../page';

const ReplayTile = ({ replay }: { replay: Replay }) => {
  return (
    <div className="bg-gray-300 p-2 m-1 rounded-md">
      <p>{replay.url}</p>
      <p>{replay.thumbnail}</p>
      <p>{replay.title}</p>
      <p>{replay.host}</p>
      <p>{replay.date}</p>
      <p>{replay.duration}</p>
      <p>{replay.description}</p>
    </div>
  );
};

export default TaskTile;
