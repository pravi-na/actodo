function TodoItem (props){
    const arrlist = props.arrlist;
    const setarrlist = props.setarrlist;
    function handleDelete (deleteid){
        var temparr = arrlist.filter((item)=>{
            if(item.id === deleteid){
                return false
            }
            else{
                return true
            }
        })
        setarrlist(temparr)
    }
    return(
        <>
        <div className="flex justify-between items-center">
            <p>{props.index+1}.{props.item.activity}</p>
        <button className="p-2 bg-red-500 text-white rounded-md" onClick={()=>{handleDelete(props.item.id)}}>Delete</button>
        </div>
        </>
    )
}
export default TodoItem;