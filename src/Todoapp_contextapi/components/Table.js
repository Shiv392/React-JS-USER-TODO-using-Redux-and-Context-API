import React, { useState } from 'react';
import { useContext } from 'react';
import { TodoListContext } from '../todocontext/context';
import EditDialog from '../../Todoapp_redux/Components/EditDialog';

const Table=()=>{
const {todolist,addtask,deletetask,edittask}=useContext(TodoListContext);
const [opendialog,setopendialog]=useState(false);
const [edit_task,setEdittask]=useState('');
const [editindex,setEditindex]=useState(-1);

const DeleteTask=(index)=>{
    deletetask(index);
}

const EditTask=(index,task)=>{
setEditindex(index);
setEdittask(task);
setopendialog(true);
console.log(index,task);
}

const editdialogresponse=(check,editdialogtask)=>{
console.log('edited data----->',editdialogtask);
edittask(editindex,editdialogtask);
setopendialog(false);
}

return(
    <div className='mt-4'>
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
                    <td>
                        <button className='btn btn-warning' onClick={()=>EditTask(index,task)}>Edit</button>
                        <button className='btn btn-danger' onClick={()=>DeleteTask(index)}>Delete</button>
                    </td>
                    </tr>
                ))
            }
         </tbody>
        </table>
        <EditDialog 
       open={opendialog}
       taskname={edit_task}
       confirmChanges={editdialogresponse}
    />
    </div>
)
}

export default Table;