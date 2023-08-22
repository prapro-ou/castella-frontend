'use client';

import React from 'react';
import postLoginRequest from '@/features/auth/data/PostLoginRequest';
import PostRegisterRequest from '@/features/auth/data/PostRegisterRequest';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  let [email, setEmail] = useState('');
  let [loginPassword, setLoginPassword] = useState('');
  let [emailPassword, setEmailPassword] = useState('');
  return (
    <main>
      <div className='flex'>
        <div className='grid'>
          <label htmlFor='address'>メールアドレス</label>
          <label htmlFor='loginPassword'>ログインパスワード</label>
          <label htmlFor='mailPassword'>メールパスワード</label>
        </div>
        <div className='grid'>
          <input
            className='ring-2'
            type='email'
            id='address'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className='ring-2'
            type='password'
            id='loginPassword'
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
          />
          <input
            className='ring-2'
            type='password'
            id='mailPassword'
            value={emailPassword}
            onChange={(event) => setEmailPassword(event.target.value)}
          />
        </div>
        <Button
          variant='contained'
          className='bg-primary'
          color='success'
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
        >
          送信
        </Button>
      </div>
    </main>
  );
}
