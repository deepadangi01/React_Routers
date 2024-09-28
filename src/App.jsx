import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
const App=()=>{
  return(
    <>
    <h1>Welcome to react class.........</h1>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="*" element={<NoPage/>}/>

      </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
