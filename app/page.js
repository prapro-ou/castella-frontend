'use client';

import Example from "@/features/talks/threads/component/maptest";
import DestinationList from "@/features/talks/threads/component/DestinationList";

export default function Home() {
  const DEST=[
    {
      name:"DM1",
      messageCount:"3",
      selected:true,
    },{
      name:"DM2",
      messageCount:"3",
      selected:true,
    },{
      name:"DM3",
      messageCount:"3",
      selected:true,
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
      <Example  dest={DEST}/>
      <DestinationList Destinations={DEST}/>
    </main>
  );
}