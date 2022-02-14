import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Error404 from "./pages/error404/Error404";
import React, { Component } from "react";

class App extends Component {
   render() {
      return (
         <Router>
            <div className="App">
               <Navbar />
               <div id="page">
                  <Switch>
                     <Route path="/" exact component={Home} />
                     <Route component={Error404} />
                  </Switch>
               </div>
            </div>
         </Router>
      );
   }
}

export default App;
