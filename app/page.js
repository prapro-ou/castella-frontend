'use client';

import MessageScreen from "@/features/talks/threads/messages/components/MessageScreen";
export default function Home() {
  const messages =[
    {id:1,value:"こんにちは，げんきかね",createdAt:"12:30"},
    {id:2,value:"お疲れ様です。元気です",createdAt:"12:32"},
  ];
  return (
    <main>
      <MessageScreen messages={messages} />
      <p>
        LAページ
        <a href='/login' className='text-primary'>
          Loginページ
        </a>
      </p>
    </main>
  );
}
