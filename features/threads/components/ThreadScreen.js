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
    <div className={`relative bg-white ${className}`}>
      <div className='flex h-[calc(100vh-96px)] flex-col items-center space-y-10 overflow-auto py-10'>
        {threads.map((thread) => (
          <div key={thread.id}>
            <ThreadTile
              subject={thread.subject}
              body={thread.body}
              messageCount={thread.reply_count}
              isNew={thread.is_new}
              onClickMessageCount={() => {
                onClickTile(thread.id);
              }}
              selected={thread.selected}
            />
          </div>
        ))}
      </div>
      <div className='absolute bottom-28 right-14'>
        <FloatActionButton
          src={plusWhite}
          alt='スレッド作成'
          onClickButton={onClickCreateThreadButton}
        />
      </div>
    </div>
  );
}
