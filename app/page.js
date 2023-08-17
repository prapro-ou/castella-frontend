'use client';

import MessageDialog from "@/features/MessageDialog";

export default function Home() {
  return (
    <main>
      <p>
        LAページ
        <a href='/login' className='text-primary'>
          Loginページ
        </a>
      </p>
      <MessageDialog />
    </main>
  );
}
