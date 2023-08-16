'use client';

import ThreadScreen from "@/features/talks/threads/component/ThreadScreen";

export default function Home() {
  const Threadliist=[
    {subject:'aaaaaaaaaaa',
    body:'aaaaaaaaaaaa',
    messageCount:20,
    isNew:null,
    onClickMessageCount:null,
    selected:null
  },
  {subject:'bbbbbbbbbbbbb',
    body:'bbbbbbbbbbbb',
    messageCount:30,
    isNew:null,
    onClickMessageCount:null,
    selected:null
  }
  ];
  return (
    <main>
      <p>
        LAページ
        <a href='/login' className='text-primary'>
          Loginページ
        </a>
      </p>
      <ThreadScreen threads={Threadliist} onClickCreateThreadButton={null}/>
    </main>
  );
}
