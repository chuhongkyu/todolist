import { atom, selector } from "recoil";

export enum Categories {
    "TO_DO"= "TO_DO",
    "DONE" = "DONE",
}
export interface IToDo{
    id: string;
    text: string;
    check: boolean;
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