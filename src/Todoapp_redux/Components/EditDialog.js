import React, { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';

const EditDialog=({open,confirmChanges,taskname})=>{
    console.log('this is taskname---->',taskname)
    const editform=useFormik({
    initialValues:{
        taskname:taskname
    },
    onSubmit:(values,{resetForm})=>{
        console.log('edited values',values);
        confirmChanges(true,values.taskname);
        resetForm();
    }
    });

    useEffect(()=>{
    editform.setFieldValue('taskname',taskname)
    },[taskname])

return(
<Dialog open={open} sx={{ '& .MuiDialog-paper': { width: '80%', minHeight: 200 } }} style={{'padding':'10px 10px 0px 10px'}}>
<DialogContent>
    <form className='form' onSubmit={editform.handleSubmit}>
        <div className='mb-3'>
            <TextField  style={{'width':'100%'}} label='Enter Task Name' {...editform.getFieldProps('taskname')}  />
        </div>
        <DialogActions className='mt-4'>
        <div style={{'display':'flex','justifyContent':'end','width':'100%','gap':'8px'}}>
        <Button variant='contained'color='action' onClick={()=>confirmChanges(false,'')}>Cancle</Button>
        <Button variant='contained' disabled={editform.values.taskname==''} color='primary' onClick={()=>confirmChanges(true,editform.values.taskname)}>Confirm</Button>
        </div>
        </DialogActions>
    </form>
</DialogContent>
</Dialog>
)
}

export default EditDialog;