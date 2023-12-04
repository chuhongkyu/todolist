import { useRecoilValue } from "recoil";
import { toDoSelector } from "../utils/atom";
import List from "./List";

const ListContainer = () => {
    const toDos = useRecoilValue(toDoSelector);
    
    return(
        <section>
            <h5 className="text-xl py-2">할일 리스트</h5>
            <ul>
                {toDos.map((toDo)=>{
                    return(
                        <List key={toDo.id + "KEY"} id={toDo.id} text={toDo.text} check={toDo.check} category={toDo.category}/>
                    )
                })}
            </ul>
        </section>
    )
}

export default ListContainer;