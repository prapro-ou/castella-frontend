'use client';
import MessageTile from "@/features/talks/threads/messages/components/MessageTile";
export default function Home() {
  const dispMessage='おつかれ，進捗どう？すすんでるよね？aaaaあ進んでないいていったら貸す貸す貸すカステラ';
  const at='12:30';
  const alt='上aaa司';
  return (
    <main>
      <MessageTile value={dispMessage} createdAt={at} alt={alt}/>
      <p>
        LAページ
        <a href='/login' className='text-primary'>
          Loginページ
        </a>
      </p>
    </main>
  );
}
