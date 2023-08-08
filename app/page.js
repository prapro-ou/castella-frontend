'use client';
import MessageTile from "@/features/talks/threads/messages/components/MessageTile";

export default function Home() {
  const dispMessage='おつかれ，進捗どう？すすんでるよね？'
  return (
    <main>
      <MessageTile />

      <p>
        LAページ
        <a href='/login' className='text-primary'>
          Loginページ
        </a>
      </p>
    </main>
  );
}
