import { useState } from "react";
import { Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from "@mui/material";
import FloatActionButton from "./components/FloatActionButton";
import addWhite from '@/public/add_white.svg';

export default function MessageDialog({onClickCancel,onClickSend}){
    const [message, setMessage] = useState("");
    const [open,setOpen]=useState(false);
    function handleOpen(){
      setOpen(true);
    };
    function handleClose(){
      setOpen(false);
    };
 
    return (
      <div>
        <FloatActionButton src={addWhite} alt="add" onClickButton={handleOpen} />
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
