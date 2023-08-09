"use client";
import React from 'react';
import MessageTile from './MessageTile';

/**
 * メッセージと返信欄を示すためのコンポーネント
 * @param {} onClickCreateReplyButton ボタンを押した時に動かす関数
 */

export default function MessageScreen({messages,onClickCreateReplyButton}){
    console.log(messages);
    return(

        <div>
            {messages.map((message)=> (
                <div key={message.id} >
                    <MessageTile createdAt={message.createdAt} value={message.value} src={message.src} alt={message.alt} />
                    <div className='mb-3'/>
                </div>
            ))}
        </div>
    );
}
