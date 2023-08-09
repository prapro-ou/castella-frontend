import ThreadTile from '@/features/talks/threads/component/ThreadTile';

export default function Home() {
  return (
    <main>
      <p>
        LAページ
        <a href='/login' className='text-blue-600'>
          Loginページ
        </a>
      </p>
      <ThreadTile
        subject={'明日の晩ご飯には煮物が出ます'}
        body={'サンバのリズムを知ってるかい'}
        messageCount={20}
        isNew={null}
        onClickMessageCount={20}
        selected={true}
      />
    </main>
  );
}
