import Image from 'next/image';

/**
 * アイコンを表示するためのコンポーネント
 * @param {string} src 画像のURL
 * @param {string} alt 画像がないときに表示する文章
 */
export default function Icon({ src, alt }) {
  if (src === undefined)
    return <div className='bg-thin  w-6 h-6 rounded-full'></div>;
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
