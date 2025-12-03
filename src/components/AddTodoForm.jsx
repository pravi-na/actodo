import { useState } from "react"

function AddTodoForm (props){
    const [activity, setactivity] = useState("");
    const arrlist = props.arrlist;
    const setarrlist = props.setarrlist;
    function handleChange (e){
        setactivity(e.target.value)
    }
    function handleClick (){
        setarrlist([...arrlist,{"id":arrlist.length+1,"activity":activity}]);
        setactivity("")
    }
    return(
        <>
        <div>
                <h1 className="pb-2 text-2xl font-bold">Manage Activities</h1>
                <div>
                    <input type="text" className="p-2 border border-black" value={activity} onChange={handleChange} placeholder="New Activity" />
                    <button className="bg-black border  border-black text-white p-2" onClick={()=>{handleClick()}}>Add</button>
                </div>
            </div>
        </>
    )
}
export default AddTodoForm