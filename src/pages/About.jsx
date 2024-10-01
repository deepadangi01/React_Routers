import { Outlet,Link } from "react-router-dom";
const About=()=>{
    return(
        <>
        <h1>Welcome To About Page...........</h1>
        <table border="1" bg="succuss">
            <tr>
                <td>
                    <Link to="aboutcompany">About Company</Link>
                    <br/>
                    <br/>
                    <Link to="aboutproduct">About Product</Link>
                    
                </td>
                <td>
                    <Outlet/>
                </td>
            </tr>
        </table>
        </>
    )
}
export default About;