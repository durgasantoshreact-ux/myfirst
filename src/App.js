import logo from './logo.svg';
import './App.css';
import {months as lovely,name2} from './index.js';
import Santosh from './santosh.js';
import Rajesh from './santosh.js';
import Users from './header.js';
import Navigation from './navigation.js';
import Todo from './todo.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Support from './support.js';
import Pricing from './Pricing.js';
import Norecords from './norecords.js';
import Home from './home.js'
function App() {
  console.log(5*9)
  return (
<>
   
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/Features' element={<Todo/>}></Route>
        <Route path='/Pricing' element={<Pricing/>}></Route>
        <Route path='/Support' element={<Support/>}></Route>
        <Route path='*' element={<Norecords/>}></Route>
      </Routes>
    </BrowserRouter>
   
    {/* // <div>

    // <div>5*9={5*9}</div>
    // <Santosh name='vvd' age='34' study='B.Tech' marks='200'>This is inside Data</Santosh>>
    // <Rajesh name='rajesh' age='45' study='B.Arch' marks='300'/>
    // <br/>
    // <Users name='Raina' age='38' study='B.Tech' marks='500' />
    // </div> */}

   {/* <Todo></Todo> */}
  </>
  );
}

export default App;
