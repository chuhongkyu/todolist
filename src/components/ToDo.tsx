import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState, customCategoriesState } from "./atoms";
import styled from "styled-components";

const ToDoList = styled.li`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: underline;
    span{
        margin-right: 10px;
    }
    div{

    }
    
`

const ToDoBtn = styled.button`
    background-color: ${prop =>prop.theme.bgColor};
    color: ${prop =>prop.theme.textColor};
    box-shadow: ${prop =>prop.theme.inputStyle};
    border-radius: 10px;
    padding: 5px 7px;
    border: none;
    &:hover{
        box-shadow: ${prop =>prop.theme.clickedStyle};
    }
`

function ToDo({text, category, id}:IToDo){
    const setToDos = useSetRecoilState(toDoState)
    const customCategories = useRecoilValue(customCategoriesState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget:{name},
        } = event;

        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
            // const oldToDo = oldToDos[targetIndex];
            const newToDo = {text, id, category: name as any};
            return [...oldToDos.slice(0, targetIndex),
                    newToDo,
                    ...oldToDos.slice(targetIndex+1)];
        })   
    }
    const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        // const {
        //     currentTarget: {id},
        // } = event;
        console.log(event.currentTarget.id)
        setToDos((oldToDos) => {
            const oldToDo = oldToDos.filter((toDo) => toDo.id !== id)
            console.log(oldToDo);
            return [...oldToDo];
        }
        )
    }

    return (
        <ToDoList>
            <span>{text}</span>
            <div>
                {category !== Categories.DOING && 
                    <ToDoBtn name={Categories.DOING} onClick={onClick}>Doing</ToDoBtn>
                }
                {category !== Categories.TO_DO && 
                    <ToDoBtn name={Categories.TO_DO} onClick={onClick}>ToDo</ToDoBtn>
                }
                {category !== Categories.DONE && 
                    <ToDoBtn name={Categories.DONE} onClick={onClick}>Done</ToDoBtn>
                }
                {customCategories !== [] &&
                customCategories.map((customCategory, idx) => {
                if (customCategory !== category) {
                    return (
                    <ToDoBtn name={customCategory} onClick={onClick} key={idx}>
                        {customCategory}
                    </ToDoBtn>
                    );
                }
                })}
                <ToDoBtn key={id} onClick={onDelete}>Delete</ToDoBtn>
            </div>
        </ToDoList>
    )
}

export default ToDo;