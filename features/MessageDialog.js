import { useState } from "react";
import { Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from "@mui/material";

export default function MessageDialog({isOpened,onClickCancel,onClickSend,handleClose}){
    const [message, setMessage] = useState("");
 
    return (
      <div>
        <Dialog open={isOpened} onClose={handleClose}>
          <DialogTitle>新しい返信</DialogTitle>
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
