'use client';

import DestinationTile from "@/features/talks/threads/messages/components/DestinationTile";

export default function Home() {
  return (
    <main>
      <p>
        LAページ
        <a href='/login' className='text-primary'>
          Loginページ
        </a>
      </p>
      <DestinationTile name="DM" messageCount={2} selected={true} />
    </main>
  );
}
