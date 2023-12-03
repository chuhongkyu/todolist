import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "../utils/atom";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

const CreateList = () => {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const [value, setValue] = useState<string>("");
  
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
          category 
        },
        ...oldToDos,
      ]);
  
      setValue("");
    };

    useEffect(() => {
      localStorage.setItem("toDos", JSON.stringify(toDos));
    }, [toDos]);
  
    return (
      <form onSubmit={handleValid}>
        <div>
          <input
            onChange={onChange}
            minLength={1}
            maxLength={20}
            placeholder="할일 목록을 작성해주세요."
            value={value}
          />
          <button type="submit">제출</button>
        </div>
      </form>
    );
  };
  
  export default CreateList;