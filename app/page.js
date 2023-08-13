'use client';

import DestinationList from "@/features/talks/threads/component/DestinationList";

export default function Home() {
  return (
    <main>
      <p>
        LAページ
        <a href='/login' className='text-primary'>
          Loginページ
        </a>
      </p>
    <DestinationList />
    </main>
  );
}
