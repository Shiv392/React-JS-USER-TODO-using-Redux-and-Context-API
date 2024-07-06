import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todolist:['Going to gym','Learn Node JS','Learn React JS','Learn Core JAVA']
}

const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
         console.log(action.payload);
         state.todolist.push(action.payload.task)
         console.log(action.type);
        },
        editTodo:(state,action)=>{
        console.log('edited data======>',action.payload);
        state.todolist[action.payload.index]=action.payload.taskname;
        },
        deleteTodod:(state,action)=>{
         console.log('delete resquest---->',action.payload);
         state.todolist.splice(action.payload.index,1);
        }
    }
})
export default todoSlice.reducer;
export const {addTodo,editTodo,deleteTodod} =todoSlice.actions