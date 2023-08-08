'use client';
import MessageTile from "@/features/talks/threads/messages/components/MessageTile";

export default function Home() {
  const dispMessage='おつかれ，進捗どう？すすんでるよね？';
  const at='12:30';
  return (
    <main>
      <MessageTile value={dispMessage} created_at={at}/>

      <p>
        LAページ
        <a href='/login' className='text-primary'>
          Loginページ
        </a>
      </p>
    </main>
  );
}
