import React, {Component} from 'eact';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from './firebase-config';

const firebaseApp = firebase.initializeApp(config);

class Login extends Component {
    render (){
        const {user, signOut, singInWithGoole} = this.props;
        return (
            <div> 
                { user ? <p>Hola {user.displayName}</p> : <p>Inicia sesion con Google</p>}
                { user ? <button onClick={signOut}>SignOut</button> : <button onClick={singInWithGoole}>Login</button>}

            </div>
        )
    }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvier: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,    
})(Login)