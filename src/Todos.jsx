import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./todos.css"

export default function Todos(){
    let [todos,setTodos]=useState([]);
    let [newTodo,setNewTodo]=useState("");

    let addTask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,
                {task:newTodo,id:uuidv4(),isDone:false}]})
        setNewTodo("");  
    }

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo=(id)=>{
        setTodos((prevTodo)=>todos.filter((prevTodo)=>prevTodo.id!=id));
    }

    let updateTodo=()=>{
        setTodos(todos.map((todo)=>{
            return {...todo,
            isDone: true}}));
    }

    let markasDone=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
            if(todo.id==id){
                return {
                    ...todo,
                    isDone: true,
                };
            }else{
                return todo;
            }
        }))
    }
    let deleteAll=()=>{
        setTodos([]);
    }


    return <div className="container">
        <div className="container_input">
        <input placeholder="Add a new todo" type="text"value={newTodo} onChange={updateTodoValue}/>
        <button  className="btn1" onClick={addTask}>Add</button>
        </div>
        <br />
        <hr />
        <h2 style={{color:"skyBlue"}}>To-Do List:</h2>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <span style={todo.isDone? {textDecorationLine:"line-through", color:"black"}:{}}>{todo.task}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>markasDone(todo.id)}> ✔️</button>&nbsp;&nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>x</button>
                     </li>
            ))}
        </ul>
        <br /><br />
        <button onClick={updateTodo}>All as Done</button>&nbsp;&nbsp;
        <button onClick={deleteAll}>DeleteAll</button>
    </div>
}