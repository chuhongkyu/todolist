import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, customCategoriesState, toDoSelector, toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";
import CreateCategory from './CreateCategory';

const ToDoContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px 40px;
    border-radius: 25px;
    background-color: ${prop =>prop.theme.whiteColor};
    box-shadow: ${prop =>prop.theme.boxShadow};
    h2{
        margin-top: 15px;
        color: ${prop =>prop.theme.textColor};
    }
    overflow: hidden;
    ul{
        height: 50vh;
        overflow-y: scroll;
    }
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CategoryContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 15px;
    select{
        width: 70%;
        background-color: ${prop =>prop.theme.whiteColor};
        border: none;
        box-shadow: ${prop =>prop.theme.inputStyle};
        border-radius: 10px;
        padding: 10px;
        margin: 5px 0px 10px 0px;
    }
`

const ToDoBtn = styled.button`
    background-color: ${prop =>prop.theme.bgColor};
    color: ${prop =>prop.theme.textColor};
    box-shadow: ${prop =>prop.theme.inputStyle};
    border-radius: 5px;
    padding: 10px;
    border: none;
    &:hover{
        box-shadow: ${prop =>prop.theme.clickedStyle};
    }
` 

function ToDoList(){
    const [toDo, setToDo] = useRecoilState(toDoState);
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState)
    const [customCategories, setCustomCategories] = useRecoilState(
        customCategoriesState,
      );
    const onInput = (event:React.FormEvent<HTMLSelectElement>)=>{
        setCategory(event.currentTarget.value as any)
    }

    const onDeleteAllClick = (event: React.FormEvent<HTMLButtonElement>) => {
        setToDo([]);
        setCustomCategories([]);
      };
    
      useEffect(() => {
        localStorage.setItem("toDos", JSON.stringify(toDo));
      }, [toDo]);
    
      useEffect(() => {
        localStorage.setItem("CATEGORIES_KEY", JSON.stringify(customCategories));
      }, [customCategories]);

    console.log(category)
    return (
        <ToDoContainer>
            <Header>
                <h1>To Dos</h1>
                <ToDoBtn onClick={onDeleteAllClick}>RESET</ToDoBtn>
            </Header>   
            <hr/>
            <h2>Choose or Create a category</h2>
            <CategoryContainer>
                <select value={category} onInput={onInput}>
                    <option value={Categories.TO_DO}>To Do</option>
                    <option value={Categories.DOING}>Doing</option>
                    <option value={Categories.DONE}>Done</option>
                    {customCategories !== [] &&
                        customCategories.map((customCategory, idx) => (
                        <option value={customCategory} key={idx}>
                        {customCategory}
                        </option>
                    ))}
                </select>
                <CreateCategory/>
            </CategoryContainer>
            <hr/>
            <h2>To Do</h2>
            <CreateToDo/>
                <ul>
                    {toDos?.map(toDo => <ToDo key={toDo.id}{...toDo}/>)}
                </ul>
        </ToDoContainer>
    )
}
 
export default ToDoList;