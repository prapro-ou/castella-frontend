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

export default function CreateDMThreadDialog({ isOpened, onClickCancel, onClickSend }) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <Dialog open={isOpened}>
        <DialogTitle>新規スレッド</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus={true}
            margin='dense'
            id='subject'
            label='件名'
            type='text'
            fullWidth
            value={subject} //前回の入力を記憶
            onChange={(event) => setSubject(event.target.value)}
            variant='standard'
          />
          <TextField
            margin='dense'
            id='message'
            label='本文'
            type='text'
            fullWidth
            value={message} //前回の入力を記憶
            onChange={(event) => setMessage(event.target.value)}
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
              onClickSend(subject, message);
            }}
          >
            送信
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
