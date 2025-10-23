import React, { PropsWithChildren } from 'react';
import { Replay } from '../page';
import TileMenu from './TileMenu';

const ReplayTile = ({ replay }: { replay: Replay }) => {
  return (
    // Whole container
    <div className="hover:bg-gray-100 p-2 m-1 rounded-md flex space-x-4">
      {/* Left section - thumbnail */}
      <a href={replay.url}>
        <img src={replay.thumbnail} style={{ width: '180px' }} />
      </a>
      {/* Right section */}
      <div>
        {/* Top Section - Title and Menu */}
        <div className="flex justify-between">
          <a href={replay.url}>
            <h2 className="text-">{replay.title}</h2>
          </a>
          <TileMenu replayID={replay.id} />
        </div>
        {/* Middle Section - Video properties and Action buttons */}
        <div className="flex justify-between items-center text-sm">
          {/* Video properties */}
          <p className="text-gray-600 flex-1">
            Hosted by {replay.host} on{' '}
            {new Date(replay.date).toLocaleDateString()} • Length:{' '}
            {new Date(replay.duration).toISOString().substr(11, 8)}
          </p>
          {/* Action buttons */}
          {/* <div className="space-x-2 flex-shrink-0">
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
              title="Edit Video Details"
            >
              Edit
            </button>

            <button
              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
              title="Delete Video"
            >
              Delete
            </button>
          </div> */}
        </div>
        {/* Description */}
        <p>{replay.description}</p>
      </div>
    </div>
  );
};

export default ReplayTile;
