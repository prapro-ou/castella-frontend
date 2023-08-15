'use client';
import React from 'react';
import Message from './Message';
import Icon from '@/features/components/Icon';

/**
 * メッセージそのものを表すコンポーネント
 * @param {string} src IconのURL
 * @param {string} value メッセージ内容
 * @param {string} createdAt メッセージ作成日時
 * @param {string} alt 画像が表示されなかった場合に表示される文字
 */
export default function MessageTile({ src, value, createdAt, alt }) {
  return (
    <div className='flex'>
      <Icon src={src} alt={alt} />
      <div className='ml-4' />
      <Message value={value} />
      <div className='flex flex-col-reverse'>
        <div className='ml-2 text-xs text-thin'>{createdAt}</div>
      </div>
    </div>
  );
}
