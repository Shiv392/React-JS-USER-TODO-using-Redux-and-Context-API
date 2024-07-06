 import React from 'react';
 import { createContext,useState } from 'react';

 export const TodoListContext=createContext(null);

 export const TodoListProvider=(props)=>{

   const [todolist,updatelist]=useState([
    'Learn Node JS','Learn React JS','Learn MongoDb','Learn Recursion'
   ])

   const addtask=(newtask)=>{
    const new_task=newtask.task;
    updatelist([...todolist,new_task]);
   }

   const deletetask=(index)=>{
    updatelist(todolist.filter((todo,i)=>index!=i));
   }

   const edittask=(index,edittask)=>{
    console.log('editindex--->',index);
    console.log('editdata---->',edittask)
    updatelist(todolist.map((task,i)=> i==index ? edittask : task))
   }

    return(
        <TodoListContext.Provider value={{todolist,addtask,deletetask,edittask}}>
            {props.children}
        </TodoListContext.Provider>
    )
 }