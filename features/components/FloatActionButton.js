import Image from 'next/image';

export default function FloatActionButton({ src, alt }) {
  return (
    <div className='bg-primary w-24 h-24 rounded-lg shadow-lg'>
      <Image src={src} alt={alt} width={96} height={96} />
    </div>
  );
}
