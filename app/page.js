import Icon from '@/features/components/Icon';
import Tips from '@/features/components/Tips';

export default function Home() {
  return (
    <main>
      <p>
        LAページ
        <a href='/login' className='text-blue-600'>
          Loginページ
        </a>
      </p>
      <Tips />
    </main>
  );
}
