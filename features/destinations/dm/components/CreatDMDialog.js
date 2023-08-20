'use client';

import { useState } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

export default function CreatDMDialog({
  isOpened,
  onClickCancel,
  onClickSend,
}) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div>
      <Dialog open={isOpened}>
        <DialogTitle>新規DM</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus={true}
            margin='dense'
            id='name'
            label='名前'
            type='text'
            fullWidth
            value={name} //前回の入力を記憶
            onChange={(event) => setName(event.target.value)}
            variant='standard'
          />
          <TextField
            margin='dense'
            id='address'
            label='メールアドレス'
            type='email'
            fullWidth
            value={address} //前回の入力を記憶
            onChange={(event) => setAddress(event.target.value)}
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              onClickCancel();
            }}
          >
            閉じる
          </Button>
          <Button
            onClick={() => {
              onClickSend(name, address);
            }}
          >
            送信
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
