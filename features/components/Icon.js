import Image from 'next/image';

export default function Icon({ src, alt }) {
  if (src === undefined)
  {
    console.log('案デファインド${src}');
    console.log(src);
    return <div className='h-11 w-11 rounded-full bg-thin'></div>;
  }
  return (
    <Image
      className='rounded-full'
      width={36}
      height={36}
      src={src}
      alt={alt}
    />
  );
}
