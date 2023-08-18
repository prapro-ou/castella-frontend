import { React, useState } from "react";
import { Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from "@mui/material";
// import styled from "@emotion/styled";

export default function MessageDialog(){
    const [open, setOpen] = useState(false);
    let [message, setMessage] = useState("");

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
 
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open form dialog
        </Button>
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
              value
              onChange={(event)=>{setMessage(event.target.value);}}
              variant="standard"
            />
          </DialogContent>
          <div mr-auto ml-auto>{message}</div>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Send</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}
