import { useState } from "react";
import { Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from "@mui/material";

export default function MessageDialog({isOpened,onClickCancel,onClickSend}){
    const [message, setMessage] = useState("");
    const [open,setOpen]=useState(isOpened);
    function handleClose(){
      setOpen(false);
    };
 
    return (
      <div>
        <Dialog open={open} onClose={handleClose}>
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
