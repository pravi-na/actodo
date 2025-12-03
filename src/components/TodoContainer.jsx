import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import {useState} from 'react'

function TodoContainer (){
    const[arrlist,setarrlist]=useState([
        {
            id: 1,
            activity: "Wake up at 6"
        },
        {
            id: 2,
            activity: "Wake up at 5"
        },
        {
            id: 3,
            activity: "Wake up at 4"
        },
        {
            id: 4,
            activity: "Wake up at 3"
        }
    ]);
    return(
        <>
        <div className="flex flex-wrap gap-5 p-2">
            <AddTodoForm arrlist={arrlist} setarrlist={setarrlist} />
            <TodoList arrlist={arrlist} setarrlist={setarrlist} />
        </div>
        </>
    )
}
export default TodoContainer;