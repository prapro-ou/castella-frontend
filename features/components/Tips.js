import Image from 'next/image';

export default function Tips() {
  return (
    <div className='flex w-fit items-center flex-col'>
      <Image
        width={40}
        height={40}
        alt='ハテナマーク'
        src='/question_thin.svg'
      />

      <div className='text-thin'>左欄から選択できます</div>
    </div>
  );
}