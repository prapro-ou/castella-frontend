import FloatActionButton from '@/features/components/FloatActionButton';
import ThreadTile from './ThreadTile';

export default function ThreadScreen({ threads, onClickCreateThreadButton }) {
  const list = threads.map((threads, index) => (
    <div key={index}>
        {ThreadTile (threads)}
    </div>
  ));
  return (
    <>
      <div className='grid-cols-1 space-y-10'>{list}</div>
      <button
        className='fixed bottom-2 right-2 drop-shadow-xl '
      >
        <FloatActionButton />
      </button>
    </>
  );
}
