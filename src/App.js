import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './routes/home';
import CreateElement from './routes/createElement';
import CreateProduct from './routes/createProduct';
import Navbar from './components/navbar';
import withFirebaseAuth from './login'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createTheme from '@material-ui/core/styles/createMuiTheme'
import {Provider } from 'react-redux'
import store from './redux/store'
import setUser from './redux/actions/login'
import {connect} from 'react-redux'

const theme = createTheme({
    palette: {
      primary: {
        main:"#009688"},
      secondary: {
        main: "#f50057"
      },
    },
  })

const mapStateToProps = (state)=>{
  return {
    user: state.session.user
  }
}

const CreateProductBind = connect(mapStateToProps)(CreateProduct)

const App = ({user, signOut, signInWithGoogle})=> {
  useEffect(() => {

    if(user) store.dispatch(setUser(user))
    else store.dispatch(setUser(null))
    return () => {
      //console.log(store.getState())
    }
  }, [user])
  // const [dataUser, setDataUser] = useState(user)
  // if( user) {
  //   setDataUser(user)
  //   console.log(dataUser)}
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
      <Router>        
        <Navbar user={user} signOut={signOut} signInWithGoogle={signInWithGoogle}/>
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/element" component={CreateElement}/>
          <Route exact path="/product" component={CreateProductBind}/>
        </Switch>
        </div>        
      </Router>
      </MuiThemeProvider>
      </Provider>
  );
}


export default withFirebaseAuth(App);
