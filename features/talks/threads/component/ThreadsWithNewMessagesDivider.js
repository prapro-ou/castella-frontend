import React from 'react';

export default function ThreadsWithNewMessagesDivider() {
  return (
    <div className='flex items-center'>
      <hr className='flex-grow border-gray-500' />
      <span className='mx-4 border-gray-500'>新着メッセージ</span>
      <hr className='flex-grow border-t border-gray-500' />
    </div>
  );
}