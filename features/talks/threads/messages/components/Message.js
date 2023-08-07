'use client';
import React from 'react';
/**
 * メッセージの枠組みを作り，メッセージを表示
 * @param {value} 表示するメッセージ
 */
export default function Message({ value }) {
  const displayText =value;
  return (
    <div
      className=' w-96 overflow-hidden whitespace-pre-line rounded-lg bg-primary p-4 text-left text-white shadow-md'
    >
      {displayText}
    </div>
  );
}
