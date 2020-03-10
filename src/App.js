import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './routes/home';
import CreateElement from './routes/createElement';
import CreateProduct from './routes/createProduct';
import Navbar from './components/navbar';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createTheme({
    palette: {
      primary: {
        main:"#009688"},
      secondary: {
        main: "#f50057"
      },
    },
  })


function App() {
  return (
      <MuiThemeProvider theme={theme}>
      <Router>        
        <Navbar/>
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/element" component={CreateElement}/>
          <Route exact path="/product" component={CreateProduct}/>
        </Switch>
        </div>        
      </Router>
      </MuiThemeProvider>
  );
}

export default App;
