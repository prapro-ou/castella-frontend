'use client';
import { React,useState,useEffect } from 'react';
import { Oval } from  'react-loader-spinner';

/**
 * ローディング画面表示するコンポーネント
 * @param {boolean} isLoading ローディング中かどうか
 * @author Jaja-UMA
 */
export default function LoadingScreen({isLoading}){
    const [loading,setLoading] = useState(false);

    useEffect(() =>{
        setLoading(isLoading);
    },[isLoading]);
    return(
        <div>
        { loading && <Oval
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
    );
}
