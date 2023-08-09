"use client";
import React from 'react';
import MessageTile from './MessageTile';

/**
 * メッセージと返信欄を示すためのコンポーネント
 * @param
 * @param {string} src IconのURL
 * @param {string} value メッセージ内容
 * @param {string} createdAt メッセージ作成日時
 * @param {string} alt 画像が表示されなかった場合に表示される文字
 * @param {} onClickCreateReplyButton ボタンを押した時に動かす関数
 */

export default function MessageScreen([{messages,onClickCreateReplyButton}){

    return(
        <div>
            {messages.map((massage)=> (
                <MessageTile key={massage.id} value={massage.value} src={massage.src} alt={massage.alt} />
            ))}
        </div>
    );
}
