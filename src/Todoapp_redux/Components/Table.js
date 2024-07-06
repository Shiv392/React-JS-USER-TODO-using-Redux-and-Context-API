import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addTodo,deleteTodod,editTodo } from '../Slice/TodoSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import  Button  from '@mui/material/Button';
import ConfirmDialog from './ConfirmDialog';
import EditDialog from './EditDialog';
import { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';

const Table=()=>{
const todolist=useSelector(state=> state.todo.todolist);
const dispatch=useDispatch();

console.log('this is todoist----->',todolist);
const [opendialog,setopendialog]=useState(false);
const [opendialog2,setopendialog2]=useState(false);
const [taskname,setTaskName]=useState('');
const [taskindex,setTaskIndex]=useState(-1);

const openDeleteConfirm=(taskname,index)=>{
    setTaskName(taskname);
    setTaskIndex(index);
    setopendialog(true);
}

const confirmresponse=(response)=>{
    console.log('response---->',response);
    if(response){
        dispatch(deleteTodod(taskindex));
    }
    else{
        console.log('dont delete anything----->')
    }
    setopendialog(false);
}

const openEditDialog=(taskname,taskindex)=>{
    setTaskIndex(taskindex);
    setTaskName(taskname);
    setopendialog2(true);
}

const editdialogresponse=(confirmchanges,edittask)=>{
    console.log('is edit --->',confirmchanges);
    console.log('new task --->',edittask);
    if(confirmchanges){
        dispatch(editTodo({index:taskindex,taskname:edittask}))
    }
    else{
        console.log('dont make changes------->');
    }
    setopendialog2(false);
}

return(
  <div className='container mt-4'>
        <table className='table table-striped table-responsive'>
        <thead>
            <tr>
            <th>S.No</th>
            <th>Task Name</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                todolist.map((task,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{task}</td>
                        <td style={{'display':'flex','justifyContent':'center','alignItems':'center','gap':'5px'}}>
                            <IconButton color='secondary' onClick={()=>openEditDialog(task,index)}>
                            <CreateIcon />
                            </IconButton>
                            <IconButton color='error'  onClick={()=>openDeleteConfirm(task,index)}>
                            <DeleteIcon />
                            </IconButton>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    <ConfirmDialog 
    open={opendialog}
    taskname={taskname}
    onConfirm={confirmresponse}
    />
    <EditDialog 
    open={opendialog2}
    taskname={taskname}
    confirmChanges={editdialogresponse}
    />
  </div>
)
}
export default Table;