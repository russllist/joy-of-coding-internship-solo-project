// 'use client';
import React from 'react';
import ReplayTile from './components/ReplayTile';

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
  const replayRes = await fetch(
    'http://localhost:3000/api/replays'
    //   const replayRes = await fetch('/api/replays', {
    // next: { revalidate: 10 },
  );
  const replays: Replay[] = await replayRes.json();

  // client side filtering
  const filtered: Replay[] = replays.filter(
    (replay) => replay.host === 'Katrina'
  );

  // const replaysTemp = [
  //   {
  //     id: 1,
  //     url: 'https://www.youtube.com/watch?v=1J-H-07jcBU',
  //     thumbnail: 'https://i.ytimg.com/vi/1J-H-07jcBU/hqdefault.jpg',
  //     title: '2025-06-21T18:48:53Z - Python Party & Dev-in-Training Updates',
  //     host: 'Katrina',
  //     date: '2025-06-21T00:00:00.000Z',
  //     duration: '1970-01-01T18:48:53.000Z',
  //     description: 'none yet',
  //   },
  //   {
  //     id: 4,
  //     url: 'https://www.youtube.com/watch?v=6GZ6sb_acgI',
  //     thumbnail: 'https://i.ytimg.com/vi/6GZ6sb_acgI/hqdefault.jpg',
  //     title: '2025-07-21T23:24:25Z - Life Coaching with Nando: Mindset Mondays',
  //     host: 'Nando',
  //     date: '2025-07-21T00:00:00.000Z',
  //     duration: '1970-01-01T00:35:11.000Z',
  //     description: 'none yet',
  //   },
  // ];

  return (
    <div>
      <br />
      <h1>Add Button and Sorting will go here</h1>
      <div>
        {replays.map((replay) => (
          <ReplayTile key={replay.id} replay={replay} />
        ))}
      </div>
    </div>
  );
};

export default page;
