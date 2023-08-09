import Image from 'next/image';

/**
 * アイコンを表示するためのコンポーネント
 * @param {string} src 画像のURL
 * @param {string} alt 画像がないときに表示する文章
 */
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
