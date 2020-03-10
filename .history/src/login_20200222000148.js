import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from './firebase-config';

const firebaseApp = firebase.initializeApp(config);

class Login extends Component {
    render (){
        const {user, signOut, signInWithGoogle} = this.props;
        return (
            <div> 
                { user ? <p>Hola {user.displayName}</p> : <p>Inicia sesion con Google</p>}
                { user ? <button onClick={signOut}>SignOut</button> : <button onClick={signInWithGoogle}>Login</button>}

            </div>
        )
    }
}
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);