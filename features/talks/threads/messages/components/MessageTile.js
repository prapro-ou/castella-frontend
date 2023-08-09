'use client';
import React from 'react';
import Message from './Message';
import Icon from '@/features/components/Icon';

/**
 * メッセージそのものを表すコンポーネント
 * @param {} src IconのURL
 * @param {} value メッセージ内容
 * @param {} createdAt メッセージ作成日時
 * @param {} alt 画像が表示されなかった場合に表示される文字
 */
export default function MessageTile({src,value,createdAt,alt}){
    return(
        <div className='flex' >
            <Icon src={src} alt={alt}/>
            <div className='ml-4'/>
            <Message value={value}/>
            <div className='flex flex-col-reverse'>
                <div className='text-xs text-thin ml-2'>{createdAt}</div>
            </div>
        </div>
    );
}
