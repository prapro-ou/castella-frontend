import Image from 'next/image';

export default function Tips() {
  return (
    <div className='w-fit'>
      <div className='flex justify-center'>
        <Image
          width={40}
          height={40}
          alt='ハテナマーク'
          src='/question_thin.svg'
        />
      </div>
      <div className='text-thin flex justify-center'>左欄から選択できます</div>
    </div>
  );
}
