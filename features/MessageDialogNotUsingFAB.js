/**
 * このコンポーネントを使用するためには，
 * Dialogの開閉状態を格納する変数を
 * Global Stateとして宣言しておく必要がある
 */

import {OpenState} from '@/app/page.js';
import { useContext, useState } from "react";
import { Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from "@mui/material";

export default function MessageDialogNotUsingFAB({onClickCancel,onClickSend}){
    const [message, setMessage] = useState("");
    function handleClose(){
      setOpenDialog(false);
    };
    const {openDialog,setOpenDialog}=useContext(OpenState);
    return (
      <div>
        <Dialog open={openDialog} onClose={handleClose}>
          <DialogTitle>新しい返信
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              下の欄に本文を書いてください
            </DialogContentText>
            <TextField
              autoFocus={true}
              margin="dense"
              id="message"
              label="本文"
              type="text"
              fullWidth
              value={message}//前回の入力を記憶
              onChange={(event)=> setMessage(event.target.value)}
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>{onClickCancel();handleClose();}}>閉じる</Button>
            <Button onClick={()=>{onClickSend(message);handleClose();}}>送信</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}


/**
 *    使用例（page.jsで仕様する場合）

'use client';

import MessageDialogNotUsingFAB from "@/features/MessageDialogNotUsingFAB";
import FloatActionButton from "@/features/components/FloatActionButton";
import addBlack from '@/public/addBlack.svg';
import { createContext, useState } from "react";

export const OpenState = createContext();

export default function Home() {

  const [openDialog,setOpenDialog]=useState(false);
  const value={openDialog,setOpenDialog,};

  function onClickAdd(){
    console.log("Add Clicked");
    console.log(openDialog);
    setOpenDialog(true);
    console.log(openDialog);
  }
  function onClickCancel(){
    console.log("Cancel Clicked");
    setOpenDialog(false);
  }
  function onClickSend(text){
    console.log("Send Clicked");
    console.log(text);
    setOpenDialog(false);
  }

  return (
    <main>
      <p>
        <a>
          Loginページ
        </a>
      </p>
      <OpenState.Provider value={value}>
        <FloatActionButton src={addBlack} alt="add" onClickButton={onClickAdd} />
        <MessageDialogNotUsingFAB onClickCancel={onClickCancel} onClickSend={onClickSend} />
      </OpenState.Provider>
    </main>
  );
}

 * 
 */