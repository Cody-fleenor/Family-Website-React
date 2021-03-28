import { CssBaseline } from "@material-ui/core";
import React from "react";
import {BrowswerRouter as Router} from 'react-router-dom';
import Routes from '../components/Routes';

const App = () => {
  return (
  <>
    <div>
      <Routes />
    </div>
    <CssBaseline />
  </>

  );
};

//look at this link 'https://reactrouter.com/web/example/sidebar'


export default App;
