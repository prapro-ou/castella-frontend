import React from 'react';

export default function ThreadsWithNewMessagesDivider() {
  return (
    <div className='flex items-center'>
      <hr className='grow border-url' />
      <span className='mx-4 text-url'>新着メッセージ</span>
      <hr className='grow border-t border-url' />
    </div>
  );
}
