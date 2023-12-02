import { atom, selector } from "recoil";

export enum Categories {
    "TO_DO"= "해야할 일",
    "DONE" = "완료",
}
export interface IToDo{
    id: string;
    text: string;
    category: Categories;
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
})

export const toDoState = atom<IToDo[]>({
    key: 'toDoList',
    default: JSON.parse(localStorage.getItem("toDos") || '[]'),
});
  
export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});