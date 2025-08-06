import React, { PropsWithChildren } from 'react';
import { Replay } from '../page';

const ReplayTile = ({ replay }: { replay: Replay }) => {
  return (
    <div className="bg-gray-300 p-2 m-1 rounded-md flex space-x-4">
      <a href={replay.url}>
        <img src={replay.thumbnail} style={{ height: '120px' }} />
      </a>
      <div>
        <a href={replay.url}>
          <h2>{replay.title}</h2>
        </a>
        <p>{replay.host}</p>
        {/* <p>{replay.date}</p>
            <p>{replay.duration}</p> */}
        <p>{replay.description}</p>
      </div>
    </div>
  );
};

export default ReplayTile;
