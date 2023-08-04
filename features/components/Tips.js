import Image from 'next/image';

export default function Tips() {
  return (
    <div>
      <div className='flex justify-center'>
        <Image
          width={40}
          height={40}
          alt='左欄から選択できます'
          src='/help_FILL0_wght400_GRAD0_opsz48.svg'
        />
      </div>
      <div className='text-thin flex justify-center'>左欄から選択できます</div>
    </div>
  );
}
