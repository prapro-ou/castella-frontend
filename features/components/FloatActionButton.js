import Image from 'next/image';

export default function FloatActionButton({ src, alt }) {
  return (
    <div className='h-24 w-24 rounded-lg bg-primary shadow-lg'>
      <Image src={src} alt={alt} width={96} height={96} />
    </div>
  );
}
