import Image from 'next/image';

export default function FloatActionButton({
  src,
  alt,
  onClickButton = () => {},
}) {
  return (
    <button onClick={onClickButton}>
      <div className='flex h-16 w-16 items-center justify-center rounded-lg bg-primary shadow-lg'>
        <Image src={src} alt={alt} width={32} height={32} />
      </div>
    </button>
  );
}
