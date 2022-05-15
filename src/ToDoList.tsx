import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList(){
    const {register, watch} =useForm()
    console.log(watch());
    return (
        <div>
            <form>
                <input {...register("email")} placeholder="Email"/>
                <input {...register("firstName")} placeholder="First Name"/>
                <input {...register("lastName")} placeholder="Last Name"/>
                <input {...register("password")} placeholder="Password"/>
                <button>Add</button>         
            </form>
        </div>
    )
}

// function ToDoList(){
//     const [todo, setToDo] = useState("")
//     const onChange = (event:React.FormEvent<HTMLInputElement>)=>{
//         const {currentTarget: {value}} = event;
//         setToDo(value);
//     }
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
//         event.preventDefault();
//         console.log(todo);
//     }
//     return <div>
//         <form onSubmit={onSubmit}>
//             <input onChange={onChange} value={todo}  placeholder="Write a to do"/>
//             <button>Add</button>
//         </form>
//     </div>
// }

export default ToDoList;