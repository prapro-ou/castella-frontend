import { useState } from "react";
import { Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from "@mui/material";

export default function MessageDialog({open,setOpen,onClickSend}){
    const [message, setMessage] = useState("");
    function handleClose(){
      setOpen(false);
    };
 
    return (
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>New reply</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please write a new reply here!
            </DialogContentText>
            <TextField
              autoFocus={true}
              margin="dense"
              id="message"
              label="body"
              type="text"
              fullWidth
              value={message}//前回の入力を記憶
              onChange={(event)=> setMessage(event.target.value)}
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={()=>{onClickSend(message);handleClose();}}>Send</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}
