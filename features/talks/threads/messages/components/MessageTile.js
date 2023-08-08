'use client';
import Icon from '@/features/components/Icon';
import React from 'react';
import Message from './Message';


/**
 * メッセージそのものを表すコンポーネント
 * @param {} src IconのURL
 * @param {} value メッセージ内容
 * @param {} created_at メッセージ作成日時
 */
export default function MessageTile({src,value,created_at}){
    return(
        <div className='flex' >
            <div><Icon src={src}/></div>
            <div className='ml-3'/>
            <div><Message value={value}/></div>
            <div className='flex flex-col-reverse items-end '>

                <div>{created_at}</div>
            </div>
        </div>
    );
}
