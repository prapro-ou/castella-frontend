import FloatActionButton from '@/features/components/FloatActionButton';
import ThreadTile from './ThreadTile';
import plusWhite from '@/public/icon/plus/plus_white.svg';

export default function ThreadScreen({
  threads,
  onClickCreateThreadButton,
  onClickTile,
  className,
}) {
  return (
    <div className={`bg-white ${className}`}>
      <div className='flex flex-col space-y-10'>
        {threads.map((thread) => (
          <div key={thread.id}>
            <ThreadTile
              subject={thread.subject}
              body={thread.body}
              messageCount={thread.new_message_count}
              isNew={thread.is_new}
              onClickMessageCount={() => {
                onClickTile(thread.id);
              }}
              selected={false}
            />
          </div>
        ))}
      </div>
      <div className='fixed bottom-2 right-2 drop-shadow-xl '>
        <FloatActionButton
          src={plusWhite}
          alt='プラスマーク'
          onClickButton={onClickCreateThreadButton}
        />
      </div>
    </div>
  );
}
