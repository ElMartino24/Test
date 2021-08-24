import React, {useState} from "react"
import Home from "./component/home/Home"
import Unicorn from "./component/unicorn/Unicorn";
import NavBar from "./component/shared/navbar/Navbar";
import SideBar from "./component/shared/sideBar/SideBar";
import {BrowserRouter, Route, Switch} from "react-router-dom"



function App() {

  const [navState, setNavState] = useState(false)



  return (
    <div className="App">
      <BrowserRouter>
      
      <NavBar setNavState={setNavState}/>
      <SideBar navState={navState} setNavState={setNavState}/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/unicorn" component={Unicorn}/>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
