'use client';
import { Button, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';
import { useForm } from 'react-hook-form';

const NewReplayPage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    // Convert date (from "YYYY-MM-DD") to ISO string
    const dateISO = new Date(data.date + 'T00:00:00Z').toISOString();

    // Convert duration (from "HH:MM:SS") to ISO string using a fixed date
    // If duration is "01:23:45", result is "1970-01-01T01:23:45Z"
    const durationISO = new Date(
      '1970-01-01T' + data.duration + 'Z'
    ).toISOString();

    const payload = {
      ...data,
      date: dateISO,
      duration: durationISO,
    };

    console.log('Form data submitted:', payload);
    const response = await fetch('/api/replays', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to add replay');
    }

    return response.json();
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Add New Replay</h1>
        <p>Fill out the form below to add a new replay.</p>
        {/* Make this zone DRYer at some point. Just get functioning for now */}
        <br />
        <p>Video URL</p>
        <TextField.Root {...register('url')} />
        <br />
        <p>Video Thumbnail URL</p>
        <TextField.Root {...register('thumbnail')} />
        <br />
        <p>Video Title</p>
        <TextField.Root {...register('title')} />
        <br />
        <p>Host Name</p>
        <TextField.Root {...register('host')} />
        <br />
        <p>Description</p>
        <TextArea {...register('description')} />
        <br />
        <p>Date Recorded</p>
        <TextField.Root type="date" {...register('date')} />
        <br />
        <p>Video Length</p>
        <TextField.Root type="time" step="1" {...register('duration')} />
        <br />
        <Button>Submit New Replay</Button>
      </form>
    </div>
  );
};

export default NewReplayPage;
