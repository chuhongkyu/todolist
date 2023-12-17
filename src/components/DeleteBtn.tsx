import { useSetRecoilState } from "recoil";
import { toDoState } from "../utils/atom";

interface IDelete {
    id: string
}

const DeleteBtn = (props:IDelete) => {
    const { id } = props;


    const setToDos = useSetRecoilState(toDoState);

    const onClick = () => {
        setToDos((prevToDos) =>
            prevToDos.filter((toDo) => toDo.id !== id)
        );
    }
    

    return(
        <button onClick={onClick} id={id} className="inline-flex text-white bg-red-700 hover:bg-ref-800 focus:ring-4 focus:ring-ref-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete
        </button>
    )
}

export default DeleteBtn;