import React, { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const ConfirmDialog=({open,taskname,onConfirm})=>{
    useEffect(()=>{
        console.log('props=====>',taskname)
    },[])

    return(
       <Dialog  sx={{ '& .MuiDialog-paper': { width: '80%', minHeight: 200 } }}
       maxWidth="xs" open={open} style={{'padding':'10px 0px 10px 0px'}}>
        <DialogContent>
        <h6 className='text text-danger'>Are you sure you want to delete this task?</h6>
        <h4 className='mt-3'>{taskname}</h4>
       </DialogContent>
       <Divider></Divider>
       <DialogActions>
        <div style={{'width':"100%",'display':'flex','justifyContent':'end','gap':'5px'}}>
         <Button variant='contained' color='action'  onClick={()=>onConfirm(false)}>Cancle</Button>
         <Button variant='contained' color='primary' onClick={()=>onConfirm(true)}>Confirm</Button>
        </div>
       </DialogActions>
       </Dialog>
    )
}
export default ConfirmDialog;