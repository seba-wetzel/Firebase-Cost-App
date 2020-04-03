import React, { useEffect, useState } from 'react';

import './App.scss';
import Home from './components/home';
import {ElementsR} from './components/elements';
import {ProductsR} from './components/products';
import FabR from './components/fab';
import Navbar from './components/navbar';
import withFirebaseAuth from './login'

import firebase from "firebase/app";
import "firebase/auth";
import config from './firebase-config';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";


import { ThemeProvider as MuiThemeProvider, makeStyles, useTheme } from '@material-ui/core/styles';
import createTheme from '@material-ui/core/styles/createMuiTheme'


import { Provider } from 'react-redux'
import store from './redux/store'
import setUser from './redux/actions/login'

import SwipeableViews from 'react-swipeable-views';


const theme = createTheme({
  palette: {
    primary: {
      main: "#009688"
    },
    secondary: {
      main: "#f50057"
    },
  },
})


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "whitesmoke",
    marginTop: 50,
    width: '100%',
    minWidth: 200,
    position: 'absolute',
    margin:"auto"
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

const App = ({ user, signOut, signInWithGoogle }) => {
  const [index, setIndex] = useState(1);
  const classes = useStyles();
  useEffect(() => {
    if (user) store.dispatch(setUser(user))
    else store.dispatch(setUser(null))
    return () => {
      //console.log(store.getState())
    }
  }, [user])


  return (
    <Provider store={store}>
      <FirebaseAuthProvider firebase={firebase} {...config}>
        <MuiThemeProvider theme={theme}>
          <Navbar user={user} signOut={signOut} signInWithGoogle={signInWithGoogle} index={index} changeIndex={setIndex} />
          <div className={classes.root} >
            <IfFirebaseAuthed>
              <SwipeableViews enableMouseEvents index={index} onChangeIndex={(e) => { setIndex(e) }}>
                <FirebaseAuthConsumer>
                  <Home userToken={user} />
                </FirebaseAuthConsumer>
                <FirebaseAuthConsumer>
                  <ElementsR userToken={user} />
                </FirebaseAuthConsumer>
                <ProductsR />
              </SwipeableViews>
            </IfFirebaseAuthed>
            <FabR class={classes.fab} icon={'edit'}/>
          </div>
        </MuiThemeProvider>
      </FirebaseAuthProvider>
    </Provider>
  );
}

export default withFirebaseAuth(App);
