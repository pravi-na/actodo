import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login (props){
    const userpass = props.userpass;
    const setuserpass = props.setuserpass;
    const [username,setusername] = useState("");
const [password,setpassword] = useState("");
const navigate = useNavigate()
const [check,setcheck] = useState(true)
function handleClick(){
    let userfound = false;
    userpass.forEach((item)=>{
        if(username === item.user && password === item.pass){
        setcheck(true);
        userfound=true;
        navigate("/home",{state:{username:username}})
    }
    if(userfound === false){
        setcheck(false);
    }
    })
}
function handleUserChange(e){
    setusername(e.target.value)
}
function handlePassChange(e){
    setpassword(e.target.value)
}
    return(
        <div className="flex flex-col justify-center items-center gap-5 p-5" >
        <div className="font-bold text-2xl">Hey Hi!</div>
        {check ? <p>I help you manage your activities after you login</p>: <p className="text-red-500">Please Sign up before you Login</p> }
        <div><input type="text" placeholder="Username" className="border border-black p-3 rounded-md" value={username} onChange={handleUserChange} /></div>
        <div><input type="text" placeholder="Password"  className="border border-black p-3 rounded-md" value={password} onChange={handlePassChange} /></div>
        <button className="p-3 rounded-md bg-purple-800 text-white font-semibold" onClick={handleClick}>Login</button>
        <p>Don't have an account? <Link to={"/signup"} className="underline" >Signup</Link> </p>
        </div>
    )
}
export default Login;