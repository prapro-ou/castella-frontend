import Image from 'next/image';
import questionThin from '@/public/icon/question/question_thin.svg';

export default function Tips() {
  return (
    <div className='flex w-fit flex-col items-center'>
      <Image width={40} height={40} alt='ハテナマーク' src={questionThin} />

      <div className='text-thin'>左欄から選択できます</div>
    </div>
  );
}
