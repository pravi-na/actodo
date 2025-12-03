import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup(props){
    const userpass = props.userpass;
    const setuserpass = props.setuserpass;
    const [suser,setsuser] = useState("");
    const [spass,setspass] = useState("");
    const navigate = useNavigate();
    function handleSuser (e){
        setsuser(e.target.value);
    }
    function handleSpass (e){
        setspass(e.target.value)
    }
    function handleSignup(){
        setuserpass([...userpass,{user: suser,pass:spass}]);
        navigate("/");
    }
    return(
        <div className="flex flex-col justify-center items-center gap-5 p-5" >
        <div className="font-bold text-2xl">Hey Hi!</div>
        <p>I help you manage your activities after you login</p>
        <div><input type="text" placeholder="Username" className="border border-black p-3 rounded-md" onChange={handleSuser} value={suser} /></div>
        <div><input type="text" placeholder="Password"  className="border border-black p-3 rounded-md" onChange={handleSpass} value={spass}  /></div>
        <div><input type="text" placeholder="Confirm Password"  className="border border-black p-3 rounded-md"  /></div>
        <button className="p-3 rounded-md bg-orange-800 text-white font-semibold" onClick={handleSignup}>Signup</button>
        <p>Already have an account? <Link to={"/"} className="underline" >Login</Link> </p>
        </div>
    )
}
export default Signup;