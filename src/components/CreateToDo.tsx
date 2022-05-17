import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";
import styled from 'styled-components';

interface IForm{
    toDo: string;   
}

const ToDoForm =styled.form`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    div{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        input{
                width: 70%;
                border: none;
                box-shadow: ${prop =>prop.theme.inputStyle};
                border-radius: 10px;
                background-color: ${prop =>prop.theme.whiteColor};
                padding: 10px;
                margin-right: 5px;
            }
        }
    span{
        width: 100%;
        margin-top: 5px;
        margin-left: 5px;
        text-align: start;
        color: ${prop =>prop.theme.accentColor};
    }
`;

const ToDoBtn = styled.button`
    background-color: ${prop =>prop.theme.bgColor};
    color: ${prop =>prop.theme.textColor};
    box-shadow: ${prop =>prop.theme.inputStyle};
    border-radius: 10px;
    padding: 10px 15px;
    border: none;
    &:hover{
        box-shadow: ${prop =>prop.theme.clickedStyle};
    }
`

function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState)
    const category = useRecoilValue(categoryState)
    const {register,handleSubmit, setValue, formState: { errors }}= useForm<IForm>();
    const handleValid = ({toDo}: IForm)=>{
        setToDos((oldToDos) => [{text:toDo, id:Date.now(), category}, ...oldToDos])
        setValue("toDo", "");
    }
    return(
        <ToDoForm onSubmit={handleSubmit(handleValid)}>
            <div>
                <input {...register("toDo", {
                        required: "Please write a to do",
                })} placeholder="Write a to do"/>
                <ToDoBtn>add</ToDoBtn>
            </div>
            <span>{errors.toDo?.message}</span>
        </ToDoForm>
    )
}

export default CreateToDo;