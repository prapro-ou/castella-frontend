'use client';
import React, { useState } from 'react';
/**
 * メッセージの枠組みを作り，メッセージを表示
 * @param {value} 表示するメッセージ
 */
export default function Message({ value }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const messageNum = value.length;
  const displayText =
    isExpanded === false && messageNum > 100
      ? value.slice(0, 100) + '...'
      : value;
  return (
    <button
      onClick={() => setIsExpanded(!isExpanded)}
      className='mx-auto mt-4 w-96 overflow-hidden whitespace-pre-line rounded-lg bg-primary p-4 text-left text-white shadow-md'
    >
      {displayText}
    </button>
  );
}
