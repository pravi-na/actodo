import TodoItem from "./TodoItem";

function TodoList (props){
    const arrlist = props.arrlist;
    const setarrlist = props.setarrlist;
    return (
        <>
        <div className="bg-purple-400 p-4 rounded-md flex-grow">
                <h1 className="text-2xl font-bold pb-2">Today's Activity</h1>
               {arrlist.length>0 ? "" : <p>You haven't add any activity yet</p> } 
                {arrlist.map((item,index)=>{
                    return <TodoItem item={item} index = {index} arrlist={arrlist} setarrlist={setarrlist} />
                })}
            </div>
        </>
    )
}
export default TodoList;