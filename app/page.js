'use client';

import DestinationList from '@/features/talks/threads/component/DestinationList';

export default function Home() {
  const DEST = [
    {
      name: 'DM1',
      messageCount: '3',
      selected: true,
    },
    {
      name: 'DM2',
      messageCount: '3',
      selected: false,
    },
    {
      name: 'DM3',
      messageCount: '0',
      selected: false,
    },
  ];
  return (
    <main>
      <p>
        LAページ
        <a href='/login' className='text-primary'>
          Loginページ
        </a>
      </p>
      <DestinationList Destinations={DEST} />
    </main>
  );
}
