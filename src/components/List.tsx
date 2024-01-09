import { useSetRecoilState } from "recoil"
import { IToDo, toDoState } from "../utils/atom"
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import { useState } from "react";
import ListCategory from "./ListCategory";

const List = (props:IToDo) => {
    const { id, text, check, category } = props
    const setToDos = useSetRecoilState(toDoState);
    const [edit, setEdit] = useState(false)
    const [editValue, setEditValue] = useState(text);

    const onHandleEdit = () => {
      setEdit(!edit)
      onUpdate()
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

    return(
        <li id={`list-${id}`} className="list flex items-center py-2 text-lg border-b border-gray-100">
          <span className="flex items-center gap-3 py-1 bg-white">
              <ListCategory category={category}/>
              {!edit ? 
              (<>
                <input 
                    className="check-box"
                    id={`checkbox-${id}`} 
                    type="checkbox"
                    checked={check}
                    onChange={onChange}
                    data-testid={`check-${id}`}
                />
                <label htmlFor={`checkbox-${id}`} className={`${check ? 'active': ''}`}><p>{text}</p></label>
              </>) 
              :(
                <input 
                  id={`edit-${id}`} 
                  className="px-2 bg-gray-100"
                  type="text"
                  onChange={(e)=> setEditValue(e.target.value)}
                  value={editValue}
                />
              )}
          </span>
          <span className="btn-group">
            {!check && <EditBtn id={id} onClick={onHandleEdit}/>}
            {check && <DeleteBtn id={id} />}
          </span>
        </li>
    )
}

export default List