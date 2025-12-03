import { useLocation } from "react-router-dom";
import Header from "./Header";
import Cards from "./Cards";
import TodoContainer from "./TodoContainer";
function Landing(){
    const data = useLocation()
    return(
        <>
        <Header username={data.state.username} />
        <Cards />
        <TodoContainer />
        </>
    )
}
export default Landing;