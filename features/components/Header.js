import Image from 'next/image';
import icon from '@/public/icon/castella/icon.png';

export default function Header() {
  return (
    <header className='flex h-24 items-center bg-primary shadow-md'>
      <Image className='mx-6' src={icon} width={56} height={56} alt='icon' />
      <div className='indent-2 font-zenkaku text-3xl font-bold tracking-widest text-white'>
        かすていら
      </div>
    </header>
  );
}
