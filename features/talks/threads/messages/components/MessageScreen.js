"use client";
import React from 'react';
import MessageTile from './MessageTile';
import Image from 'next/image';
import FloatActionButton from '@/features/components/FloatActionButton';
import buttonPic from 'features/talks/threads/messages/components/stylus_FILL0_wght400_GRAD0_opsz48.svg';

/**
 * メッセージと返信欄を示すためのコンポーネント
 * @param {Array} messages 子コンポーネントMessageTileに必要となる引数を持つ配列
 * @param {} onClickCreateReplyButton ボタンを押した時に動かす関数
 */
export default function MessageScreen({messages,onClickCreateReplyButton}){
    return(
        <div>
            {messages.map((message)=> (
                <div key={message.id} >
                    <MessageTile createdAt={message.createdAt} value={message.value} src={message.src} alt={message.alt} />
                    <div className='mb-3'/>
                </div>
            ))}

            <div className='fixed bottom-2.5 right-2.5'>
                <button onClick={onClickCreateReplyButton}><FloatActionButton  src={buttonPic}/></button>
            </div>
        </div>
    );
}
