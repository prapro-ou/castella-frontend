import Image from 'next/image';
import questionThin from '@/public/icon/question/question_thin.svg';

export default function Tips() {
  return (
    <div className='flex h-[calc(100vh-96px)] items-center justify-center'>
      <div className='flex w-fit flex-col items-center'>
        <Image width={64} height={64} alt='ハテナマーク' src={questionThin} />
        <div className='mt-4 text-xl text-thin'>左欄から選択できます</div>
      </div>
    </div>
  );
}
