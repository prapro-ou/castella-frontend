'use client';

import MessageDialog from "@/features/MessageDialog";

export default function Home() {
  function onClickSend(text){
    console.log(text);
  }
  return (
    <main>
      <p>
        LAページ
        <a href='/login' className='text-primary'>
          Loginページ
        </a>
      </p>
      <MessageDialog onClickSend={onClickSend}/>
    </main>
  );
}
