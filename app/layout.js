import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import icon from '@/public/icon/castella/icon.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'かすてら',
  description: 'かすてら食べたい',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className + " overflow-hidden"}>
        <Header />
        {children}
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className='flex h-24 items-center bg-primary shadow-md'>
      <Image className='mx-6' src={icon} width={56} height={56} alt='icon' />
      <div className='indent-2 font-zenkaku text-3xl font-bold tracking-widest text-white'>かすていら</div>
    </header>
  );
}
