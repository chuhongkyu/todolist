import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState, customCategoriesState } from "./atoms";
import styled from "styled-components";

const ToDoList = styled.li`
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        margin-right: 10px;
        text-decoration: underline;
    }
    div{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
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

const DeleteBtn = styled(ToDoBtn)`
  color: ${prop =>prop.theme.whiteColor};
  background-color: black;
    &:hover{
        background-color: ${prop =>prop.theme.whiteColor};
    }
`;

function ToDo({text, category, id}:IToDo){
    const setToDos = useSetRecoilState(toDoState)
    const customCategories = useRecoilValue(customCategoriesState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget:{name},
        } = event;

        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
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
                <DeleteBtn key={id} onClick={onDelete}>🗑️</DeleteBtn>
            </div>
        </ToDoList>
    )
}

export default ToDo;