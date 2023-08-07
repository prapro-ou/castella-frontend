import Image from 'next/image';

export default function Icon({ src, alt }) {
  if (src === undefined)
    return <div className='h-6 w-6 rounded-full bg-thin'></div>;
  return (
    <Image
      className='rounded-full'
      width={24}
      height={24}
      src={src}
      alt={alt}
    />
  );
}
