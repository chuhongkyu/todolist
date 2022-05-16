import { IToDo } from "./atoms";

function ToDo({text}:IToDo){
    return (
        <li>
            <span>{text}</span>
            <button>Doing</button>
            <button>ToDo</button>
            <button>Done</button>
        </li>
    )
}

export default ToDo;