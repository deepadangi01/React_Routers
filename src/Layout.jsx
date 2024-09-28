import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link> |
        <Link to="about">About</Link> |
        <Link to="contact">Contact</Link> |
        <Link to ="nopage">NoPage</Link>
        <hr />
        <Outlet/>
        <hr/>
        www.mywebsite.com
        </>
    )
}
export default Layout;