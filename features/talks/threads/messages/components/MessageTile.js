'use client';
import Icon from '@/features/components/Icon';
import React from 'react';
import Message from './Message';


/**
 * メッセージそのものを表すコンポーネント
 * @param {src} IconのURL
 * @param {value} メッセージ内容
 * @param {created_at} メッセージ作成日時
 */
export default function MessageTile({src,value,created_at}){
    return(
        <div className='flex items-center' >
        <div><Icon /></div>
        <div className='ml-1'/>
        <div><Message /></div>
        {created_at}
        </div>
    );
}
