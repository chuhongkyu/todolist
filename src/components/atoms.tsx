import { atom, selector } from "recoil";

export enum Categories {
    "TO_DO"= "TO_DO",
    "DOING"= "DOING",
    "DONE" = "DONE",
}

export interface IToDo{
    text: string;
    id: number;
    category: Categories;
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
})

export const customCategoriesState = atom<string[]>({
    key: 'customCategories',
    default: JSON.parse(localStorage.getItem('CATEGORIES_KEY') || '[]'),
  });

  export const toDoState = atom<IToDo[]>({
    key: 'toDoList',
    default: JSON.parse(localStorage.getItem("toDo") || '[]'),
  });
  
  export const toDoSelector = selector({
    key: 'toDoSelector',
    get: ({ get }) => {
      const toDos = get(toDoState);
      const category = get(categoryState);
      return toDos.filter((toDo) => toDo.category === category);
    },
  });