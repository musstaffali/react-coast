import Error from"./Pages/Error";
import Home from "./Pages/Home";
import "./App.css";

import Rooms from './Pages/Rooms';
import SingleRooms from "./Pages/SingleRooms";
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar";


function App() {
  return (
   
 <>

 <Navbar />
 <Switch>
   <Route exact path="/" ><Home/></Route>
   <Route exact path="/Rooms/" ><Rooms /> </Route>
   <Route exact path="/Rooms/:slug" component={SingleRooms} />
   <Route exact component={Error} />
   </Switch>
  
 </>

  );
}

export default App;
