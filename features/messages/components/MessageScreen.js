'use client';
import React from 'react';
import MessageTile from './MessageTile';
import FloatActionButton from '@/features/components/FloatActionButton';
import editWhite from '@/public/icon/edit/edit_white.svg';

/**
 * メッセージと返信欄を示すためのコンポーネント
 * @param {Array} messages 子コンポーネントMessageTileに必要となる引数を持つ配列
 * @param {() => void} onClickCreateReplyButton ボタンを押した時に動かす関数
 * @param className
 */
export default function MessageScreen({ messages, onClickCreateReplyButton, className }) {
  return (
    <div className={`relative bg-white ${className}`}>
      <div className='flex h-screen flex-col items-center space-y-10 overflow-auto py-10'>
        {messages.map((message) => (
          <div className='mb-3' key={message.id}>
            <MessageTile
              createdAt={message.createdAt}
              value={message.body}
              src={message.src}
              alt={message.alt}
            />
          </div>
        ))}
      </div>

      <div className='absolute bottom-28 right-14'>
        <FloatActionButton
          src={editWhite}
          alt='メール作成'
          onClickButton={onClickCreateReplyButton}
        />
      </div>
    </div>
  );
}
