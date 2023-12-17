import { useRecoilState, useSetRecoilState } from "recoil"
import { IToDo, toDoState } from "../utils/atom"
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import { useEffect, useState } from "react";

const List = (props:IToDo) => {
    const { id, text, check, category } = props
    const setToDos = useSetRecoilState(toDoState);
    const [edit, setEdit] = useState(false)
    const [editValue, setEditValue] = useState(text);

    const onHandleEdit = () => {
      setEdit(!edit)
    }

    const onChange = () => {
        setToDos((prevToDos) =>
          prevToDos.map((toDo) =>
            toDo.id === id ? { ...toDo, check: !toDo.check } : toDo
          )
        );
    };

    const onUpdate = () => {
      setToDos((prevToDos) =>
          prevToDos.map((toDo) =>
            toDo.id === id ? { ...toDo, text: editValue } : toDo
          )
      );
    };

    useEffect(()=>{
      onUpdate()
    },[edit])

    return(
        <li id={`list-${id}`} className="list flex items-center text-lg">
          {!edit ? 
          (
            <span className="flex items-center gap-2 py-2">
              <input 
                  className="check-box"
                  id={`checkbox-${id}`} 
                  type="checkbox"
                  checked={check}
                  onChange={onChange}
                  data-testid={`check-${id}`}
              />
              <label htmlFor={`checkbox-${id}`} className={check ? 'active': ''}><p>{text}</p></label>
            </span>
          ): (
            <span className="flex items-center gap-2 py-2">
              <input 
                id={`edit-${id}`} 
                type="text"
                onChange={(e)=> setEditValue(e.target.value)}
                value={editValue}
              />
            </span>
          )}
          <span className="btn-group">
            {!check && <EditBtn id={id} onClick={onHandleEdit}/>}
            {check && <DeleteBtn id={id} />}
          </span>
        </li>
    )
}

export default List