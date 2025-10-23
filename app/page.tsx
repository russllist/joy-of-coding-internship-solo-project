// 'use client';
import React from 'react';
import ReplayTile from './components/ReplayTile';
import Link from 'next/link';
import { Button } from '@radix-ui/themes';

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
  const replayRes = await fetch('http://localhost:3000/api/replays');
  const replays: Replay[] = await replayRes.json();
  // const filtered: Replay[] = replays.filter(
  //   (replay) => replay.host === 'Katrina'
  // );

  return (
    <div>
      <br />
      <Button>
        <Link href="/newreplay">Add New Replay</Link>
      </Button>
      <div>
        {replays.map((replay) => (
          <ReplayTile key={replay.id} replay={replay} />
        ))}
      </div>
    </div>
  );
};

export default page;
