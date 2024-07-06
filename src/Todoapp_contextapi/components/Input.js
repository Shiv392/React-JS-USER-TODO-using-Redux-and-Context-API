import React from "react";  
import {useFormik} from 'formik';
import Button from '@mui/material/Button';
import  TextField  from "@mui/material/TextField";
import AddIcon from '@mui/icons-material/Add';
import { TodoListContext } from "../todocontext/context";
import { useContext } from "react";


const Input=()=>{

const {todolist,addtask,deletetask} = useContext(TodoListContext);

const formik=useFormik({
    initialValues:{
        task:''
    },
    onSubmit:(values,{resetForm})=>{
        console.log(values);
        addtask({task:values.task});
        formik.resetForm();
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