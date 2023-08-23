'use client';

import React from 'react';
import Image from 'next/image';
import postLoginRequest from '@/features/auth/data/PostLoginRequest';
import PostRegisterRequest from '@/features/auth/data/PostRegisterRequest';
import { Button, TextField, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import icon from '@/public/icon/castella/icon.png';

export default function Register() {
  const router = useRouter();
  let [email, setEmail] = useState('');
  let [loginPassword, setLoginPassword] = useState('');
  let [emailPassword, setEmailPassword] = useState('');

  const theme = createTheme({
    palette: {
      castella: {
        main: '#99A866', //tailwindのprimaryと同じ
        contrastText: '#ffffff',
      },
    },
  });

  return (
    <main>
      <div className='flex bg-gray'>
        <div className='grid h-screen w-2/3 items-center justify-center rounded-r-3xl bg-primary'>
          <div>
            <Image
              className='m-auto'
              src={icon}
              width={170}
              height={170}
              alt='icon'
            />
            <div className='mt-10 font-zenkaku text-5xl font-bold tracking-widest text-white'>
              かすていら
            </div>
          </div>
        </div>
        <div className='grid h-screen w-full items-center justify-center'>
          <div className='grid h-fit w-fit rounded-xl bg-white px-10 pb-14 pt-10 shadow-2xl'>
            <div className='mx-auto font-zenkaku text-3xl font-bold tracking-widest text-default'>
              とうろく
            </div>
            <ThemeProvider theme={theme}>
              <TextField
                className='mt-7'
                label='メールアドレス'
                id='address'
                type='email'
                color='castella'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                variant='outlined'
              />
              <TextField
                className='mt-3'
                label='ログインパスワード'
                id='loginPassword'
                type='password'
                color='castella'
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                variant='outlined'
              />
              <TextField
                className='mt-3'
                label='メールパスワード'
                id='mailPassword'
                type='password'
                color='castella'
                value={emailPassword}
                onChange={(event) => setEmailPassword(event.target.value)}
                variant='outlined'
              />
              <Button
                variant='contained'
                className='mt-14 bg-primary'
                color='castella'
                onClick={async () => {
                  const isSuccessToRegister = await PostRegisterRequest(
                    email,
                    loginPassword,
                    emailPassword,
                  );
                  if (!isSuccessToRegister) return;
                  const isSuccessToLogin = postLoginRequest(
                    email,
                    loginPassword,
                  );
                  if (!isSuccessToLogin) return;
                  router.push(`/destinations`);
                }}
              >
                送信
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </main>
  );
}
