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
      <DestinationTile src='./add_white.svg' alt='a' name='DM' messageCount='3' selected={false} />
    </main>
  );
}
