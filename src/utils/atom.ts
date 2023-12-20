import { atom, selector } from "recoil";

export enum Categories {
    "TO_DO"= "😀 할일",
    "PET" = "🐶 반려 동물",
    "ACTIVITY" = "⚽️ 활동/여가",
    "STUDY" = "📖 도서/공부"
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

export const currentInputState = atom<Categories>({
  key: "categoryInput",
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