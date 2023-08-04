import FloatActionButton from '@/features/components/FloatActionButton';

export default function Home() {
  return (
    <main>
      <p>
        LAページ
        <a href='/login' className='text-blue-600'>
          Loginページ
        </a>
      </p>
      <FloatActionButton src='/add.svg' alt='add icon' />
    </main>
  );
}
