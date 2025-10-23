'use client';
import React, { useState } from 'react';
import { Replay } from '../page';

const TileMenu = ({ replayID }: { replayID: number }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleEdit = () => {
    console.log(`Edit replay with ID: ${replayID}`);
  };

  const handleDeleteConfirm = async () => {
    await fetch(`http://localhost:3000/api/replays/${replayID}`, {
      method: 'DELETE',
    });
    window.location.reload();
  };

  return (
    <div>
      {/* 3-dot menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="hover:bg-gray-200 rounded-full px-3"
      >
        ⋮
      </button>
      {menuOpen && (
        <div className="">
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
            title="Edit Video Details"
            onClick={handleEdit}
          >
            Edit entry {replayID}
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
            title="Delete Video"
            onClick={handleDelete}
          >
            Delete entry {replayID}
          </button>
        </div>
      )}
    </div>
  );
};

export default TileMenu;
