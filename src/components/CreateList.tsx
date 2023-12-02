import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../utils/atom";
import { useState, ChangeEvent, FormEvent } from "react";

const CreateList = () => {
    const setToDos = useSetRecoilState(toDoState);
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
        { text: value, id: Date.now().toString(), category },
        ...oldToDos,
      ]);
  
      setValue("");
    };
  
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