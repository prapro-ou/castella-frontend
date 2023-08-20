'use client';

import postLoginRequest from '@/features/auth/data/PostLoginRequest';
import PostRegisterRequest from '@/features/auth/data/PostRegisterRequest';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  let [email, setEmail] = useState('');
  let [loginPassword, setLoginPassword] = useState('');
  let [emailPassword, setEmailPassword] = useState('');
  return (
    <main>
      <div>
        <div>
          <label>メールアドレス</label>
          <input
            className='ring-2'
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>ログインパスワード</label>
          <input
            className='ring-2'
            type='password'
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
          />
        </div>
        <div>
          <label>メールパスワード</label>
          <input
            className='ring-2'
            type='password'
            value={emailPassword}
            onChange={(event) => setEmailPassword(event.target.value)}
          />
        </div>
        <button
          onClick={async () => {
            const isSuccessToRegister = await PostRegisterRequest(
              email,
              loginPassword,
              emailPassword,
            );
            if (!isSuccessToRegister) return;
            const isSuccessToLogin = postLoginRequest(email, loginPassword);
            if (!isSuccessToLogin) return;
            router.push(`/destinations`);
          }}
          className='bg-thin'
        >
          送信
        </button>
      </div>
    </main>
  );
}
