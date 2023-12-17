import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "../utils/atom";
import { useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";
import CategoryDropBox from "./CategoryDropBox";

const CreateList = () => {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const [value, setValue] = useState<string>("");
    const formRef = useRef<HTMLFormElement | null>(null);
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
      setValue(text);
    };
  
    const handleValid = (e: FormEvent) => {
      e.preventDefault();
      if (value.trim() === "") return;
  
      setToDos((oldToDos) => [
        { 
          id: Date.now().toString(),
          text: value, 
          check: false,
          category 
        },
        ...oldToDos,
      ]);
  
      setValue("");
    };

    useEffect(() => {
      localStorage.setItem("toDos", JSON.stringify(toDos));
    }, [toDos]);

    const onClickDropBox = ()=>{
      const currentForm = formRef.current;
      if (currentForm) {
        currentForm.classList.toggle('active')
      }
    }
  
    return (
      <form ref={formRef} className="form" onSubmit={handleValid}>
        <div className="flex py-2">
          <button 
            id="dropdown-button" 
            data-dropdown-toggle="dropdown" 
            onClick={onClickDropBox}
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" type="button">
            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
            
          </button>
          <div className="relative w-full">
              <input 
                required
                type="text" 
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                id="success"
                onChange={onChange}
                minLength={1}
                maxLength={20}
                placeholder="할일 목록을 작성해주세요."
                value={value}
              />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">등록</span>
            </button>
          </div>
        </div>
        <CategoryDropBox/>
      </form>
    );
  };
  
  export default CreateList;