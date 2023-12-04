import { useRecoilState, useSetRecoilState } from "recoil"
import { IToDo, toDoState } from "../utils/atom"

const List = (props:IToDo) => {
    const { id, text, check, category } = props
    const setToDos = useSetRecoilState(toDoState);

    const onChange = () => {
        setToDos((prevToDos) =>
          prevToDos.map((toDo) =>
            toDo.id === id ? { ...toDo, check: !toDo.check } : toDo
          )
        );
      };

    return(
        <li id={id} className="list flex items-center gap-2 text-lg">
            <input 
                className="check-box"
                id={id} 
                type="checkbox"
                checked={check}
                onChange={() => onChange()}
            />
            <label htmlFor={id} className={check ? 'active': ''}><p>{text}</p></label>
        </li>
    )
}

export default List