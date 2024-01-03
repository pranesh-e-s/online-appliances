import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./component/signin";
import Home from "./component/home";
import Privacy from "./component/privacy";
import Aboutus from "./component/Aboutus";
import Login from "./component/login";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Privacy' element={<Privacy/>}/>
      <Route path='/Aboutus' element={<Aboutus/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;

