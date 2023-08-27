'use client';

import postLoginRequest from '@/features/auth/data/PostLoginRequest';
import { useState } from 'react';
import 'whatwg-fetch';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import icon from '@/public/icon/castella/icon.png';
import { Button, TextField, ThemeProvider, createTheme } from '@mui/material';

export default function Login() {
  const router = useRouter();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

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
        <div className='grid h-screen w-2/3  items-center justify-center rounded-r-3xl bg-primary'>
          <div>
            <Image
              src={icon}
              alt='icon'
              width={170}
              height={170}
              className='m-auto'
            />
            <div className='mt-10 font-zenkaku text-5xl font-bold tracking-widest text-white'>
              かすていら
            </div>
          </div>
        </div>
        <div className='grid h-screen w-full items-center justify-center'>
          <div className='grid h-fit w-fit rounded-xl bg-white px-10 pb-14 pt-10 shadow-2xl'>
            <div className='mx-auto font-zenkaku text-3xl font-bold tracking-widest text-default'>
              ろぐいん
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
                label='パスワード'
                id='password'
                type='password'
                color='castella'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                variant='outlined'
              />
              <Button
                variant='contained'
                className='mt-14 bg-primary'
                color='castella'
                onClick={async () => {
                  const isSuccess = await postLoginRequest(email, password);
                  if (isSuccess) {
                    router.push(`/destinations`);
                  }
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
