import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm{
    email: string;
    firstName?: string;
    lastName: string;
    password: string;
    password1: string;
    extraError?:string;    
}


function ToDoList(){
    const {register, handleSubmit, formState:{errors}, setError} = useForm<IForm>({
        defaultValues:{
            email:"@naver.com",
        }
    });
    const onValid = (data: IForm) =>{
        if(data.password !== data.password1){
            setError("password1", 
                    {message:"Password are not the same"},
                    {shouldFocus: true})
        }
        // setError("extraError", {message:"Server offline."})
    }
    console.log(errors);
    return (
        <div>
            <form style={{display: "flex", flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
                <input {...register("email", 
                        {required: "Email is required",  
                        pattern:{
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com emails allowed",
                        },
                        })} 
                        placeholder="Email"/>
                <span>{errors?.email?.message}</span>
                <input {...register("firstName", 
                        {required: "write here", 
                        minLength: 5, 
                        validate:{
                            noNico: (value)=> value?.includes("nico") ? "no nicos allowed": true,
                            noNick: (value)=> value?.includes("nick") ? "no nicks allowed": true,
                        },
                        })} placeholder="First Name"/>
                <span>{errors?.firstName?.message}</span>
                <input {...register("lastName", {required: "write here" , minLength: 5})} placeholder="Last Name"/>
                <span>{errors?.lastName?.message}</span>
                <input {...register("password", {required: "password is required", 
                                                minLength: {
                                                    value: 5, 
                                                    message: "Your password is too short"
                                                }})} placeholder="Password"/>
                <span>{errors?.password?.message}</span>
                <input {...register("password1", {required: "password is required"})} placeholder="Password1"/>
                <span>{errors?.password1?.message}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
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