import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import "./App.css";
import Home from "./Components/Home/Home.jsx";
import Todo from "./Components/ToDo/ToDo.jsx"
const App = () => {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/user/:id" exact component={Todo} />
    </Switch>
    </BrowserRouter>
  );
};

export default App;
