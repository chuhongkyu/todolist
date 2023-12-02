import { IToDo } from "../utils/atom"

const List = (props:IToDo) => {
    const { id, text, category } = props
    return(
        <li id={id}>
            <span>{category}</span>
            <p>{text}</p>
        </li>
    )
}

export default List