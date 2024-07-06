import React from "react";  
import {useFormik} from 'formik';
import {  useDispatch,useSelector } from "react-redux";
import { addTodo,deleteTodod,editTodo } from "../Slice/TodoSlice";
import Button from '@mui/material/Button';
import  TextField  from "@mui/material/TextField";
import AddIcon from '@mui/icons-material/Add';


const Input=()=>{

const dispatch=useDispatch();
const todolist= useSelector(state=> state.todo.todolist);
// console.log('this is tododlist---->',todolist);

const formik=useFormik({
    initialValues:{
        task:''
    },
    onSubmit:(values,{resetForm})=>{
        formik.resetForm();
        dispatch(addTodo(values))
    }
})

return(
    <div className="container row">
          <form onSubmit={formik.handleSubmit} className="form" style={{"display":'flex','flexDirection':'row','justifyContent':'space-between'}}>
            <div style={{'width':'70%'}}>
            <TextField style={{'width':'100%'}} label='Enter New Task' id='task' name='task' variant="filled"   {...formik.getFieldProps('task')} />
            </div>
            <div className="btn-group">
                <Button startIcon={<AddIcon />}
                variant="contained" color="primary" disabled={formik.values.task==''} type="submit">Add Task</Button>
            </div>
        </form>
    </div>
)
}

export default Input;