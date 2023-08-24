'use client';
import { React} from 'react';
import { Oval } from  'react-loader-spinner';

/**
 * ローディング画面表示するコンポーネント
 * @param {boolean} isLoading ローディング中かどうか
 * @author Jaja-UMA
 */
export default function LoadingScreen({isLoading}){

    return(
      <div className='m-auto bg-gray'>
          <div>
              {isLoading && <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
              }
          </div>
      </div>
    );
}
