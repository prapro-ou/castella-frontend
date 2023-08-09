import Image from 'next/image';
export default function Icon({ src, alt }) {
  if (src === undefined)
  {
    return <div className='h-11 w-11 rounded-full bg-thin'></div>;
  }
  return (
    <Image
      className='rounded-full h-11 w-11'
      width={36}
      height={36}
      src={src}
      alt={alt}
    />
  );
}
