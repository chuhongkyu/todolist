import { useRecoilState, useSetRecoilState } from "recoil"
import { IToDo, toDoState } from "../utils/atom"
import DeleteBtn from "./DeleteBtn";

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
        <li id={id} className="list flex items-center text-lg">
          <span className="flex items-center gap-2 py-2">
            <input 
                className="check-box"
                id={id} 
                type="checkbox"
                checked={check}
                onChange={() => onChange()}
                data-testid={`check-${id}`}
            />
            <label htmlFor={id} className={check ? 'active': ''}><p>{text}</p></label>
          </span>
          <span className="btn-group">
            {check ? <DeleteBtn id={id} /> : null}
          </span>
        </li>
    )
}

export default List