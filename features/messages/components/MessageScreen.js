'use client';
import React from 'react';
import MessageTile from './MessageTile';
import FloatActionButton from '@/features/components/FloatActionButton';
import editWhite from '@/public/icon/edit/edit_white.svg';

/**
 * メッセージと返信欄を示すためのコンポーネント
 * @param {Array} messages 子コンポーネントMessageTileに必要となる引数を持つ配列
 * @param {() => void} onClickCreateReplyButton ボタンを押した時に動かす関数
 */
export default function MessageScreen({ messages, onClickCreateReplyButton }) {
  return (
    <>
      <div className='flex flex-col'>
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

      <div className='fixed bottom-2.5 right-2.5'>
        <FloatActionButton
          src={editWhite}
          alt={'メールを作成'}
          onClickButton={onClickCreateReplyButton}
        />
      </div>
    </>
  );
}
