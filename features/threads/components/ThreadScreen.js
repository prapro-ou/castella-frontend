import FloatActionButton from '@/features/components/FloatActionButton';
import ThreadTile from './ThreadTile';

export default function ThreadScreen({ threads, onClickCreateThreadButton }) {
  const list = threads.map((thread) => (
    <div key={thread.id}>
      <ThreadTile {...thread} />
    </div>
  ));
  return (
    <>
      <div className='flex flex-col space-y-10'>{list}</div>
      <div className='fixed bottom-2 right-2 drop-shadow-xl '>
        <FloatActionButton
          src='/plus_white.svg'
          alt='プラスマーク'
          onClickButton={onClickCreateThreadButton}
        />
      </div>
    </>
  );
}
