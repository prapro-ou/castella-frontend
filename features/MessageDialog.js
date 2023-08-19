import { useState } from "react";
import { Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from "@mui/material";
// import styled from "@emotion/styled";

export default function MessageDialog({open,setOpen,onClickSend}){
    // const [open, setOpen] = useState(true);
    const [message, setMessage] = useState("");

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
  
    const handleClose = () => {
      setOpen(false);
    };
 
    return (
      <div>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Open form dialog
        </Button> */}
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
