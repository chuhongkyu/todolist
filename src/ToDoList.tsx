import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList(){
    const {register, handleSubmit, formState} = useForm();
    const onValid = (data: any) =>{
        console.log(data);
    }
    console.log(formState.errors);
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>
                <input {...register("email", {required: true})} placeholder="Email"/>
                <input {...register("firstName", {required: true, minLength: 10})} placeholder="First Name"/>
                <input {...register("lastName", {required: true})} placeholder="Last Name"/>
                <input {...register("password", {required: "password is required", 
                                                minLength: {
                                                    value: 5, 
                                                    message: "Your password is too short"
                                                }})} placeholder="Password"/>
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