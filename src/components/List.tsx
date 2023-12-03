import { IToDo } from "../utils/atom"

const List = (props:IToDo) => {
    const { id, text, category } = props
    return(
        <li id={id} className="flex items-center gap-2 text-lg">
            <span className="list-category"><p>{category}</p></span><p>{text}</p>
        </li>
    )
}

export default List