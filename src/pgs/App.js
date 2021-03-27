import React from "react";
import Header from "../components/Header"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cody from "../pgs/Cody";
import Home from "../pgs/Home";
import Nora from "../pgs/Nora";
import Beck from '../pgs/Beck';



const App = () => {
  return (
  <div>
    <Header />
    <Router>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/cody">
        <Cody />
      </Route>
      <Route path="/beck">
        <Beck />
      </Route>
      <Route path="/nora">
        <Nora />
      </Route>
    </Router>
  </div>
  );
};

//look at this link 'https://reactrouter.com/web/example/sidebar'


export default App;
