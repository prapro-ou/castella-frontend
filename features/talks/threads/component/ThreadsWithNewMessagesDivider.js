import React from 'react';

export default function ThreadsWithNewMessagesDivider() {
  return (
    <div className='flex items-center'>
      <hr className='flex-grow url' />
      <span className='mx-4 url'>新着メッセージ</span>
      <hr className='flex-grow border-t url' />
    </div>
  );
}