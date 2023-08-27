'use client';
import { React} from 'react';
import { Oval } from  'react-loader-spinner';

/**
 * ローディング画面表示するコンポーネント
 * @param {boolean} isLoading ローディング中かどうか
 * @param className
 * @author Jaja-UMA
 */
export default function LoadingScreen({isLoading, className}) {
  const hidden = isLoading ? '' : 'hidden';

  return (
    <div className={`z-10 flex h-[calc(100vh-96px)] w-full items-center justify-center bg-gray opacity-80 ${className} ${hidden}`}>
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}
