'use client';

import React from 'react';
import postLoginRequest from '@/features/auth/data/PostLoginRequest';
import PostRegisterRequest from '@/features/auth/data/PostRegisterRequest';
import { Button , TextField } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  let [email, setEmail] = useState('');
  let [loginPassword, setLoginPassword] = useState('');
  let [emailPassword, setEmailPassword] = useState('');
  return (
    <main>
      <div className='grid h-screen w-screen items-center justify-center'>
      <div className='grid h-fit w-fit space-y-3'>
        <TextField
          label="メールアドレス"
          id='address'
          type='email'
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="ログインパスワード"
          id='loginPassword'
          variant="outlined" 
          type='password'
          value={loginPassword}
          onChange={(event) => setLoginPassword(event.target.value)}
        />
        <TextField
          label="メールパスワード"
          id='mailPassword'
          variant="outlined"
          type='password'
          value={emailPassword}
          onChange={(event) => setEmailPassword(event.target.value)}          
        />
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
      <div className='h-1/4'>{/* 上の要素の位置調整のための余白 */}</div>
      </div>
    </main>
  );
}
