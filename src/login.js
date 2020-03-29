import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import config from './firebase-config';//{
//     apiKey: "AIzaSyAfvOtB5iYq-2AHKcGbH95Banw93TRKCn4",
//     authDomain: "cost-calculator-3ae3c.firebaseapp.com",
//     databaseURL: "https://cost-calculator-3ae3c.firebaseio.com",
//     projectId: "cost-calculator-3ae3c",
//     storageBucket: "cost-calculator-3ae3c.appspot.com",
//     messagingSenderId: "980660684013",
//     appId: "1:980660684013:web:2b902d531fc16dba2df8e4",
//     measurementId: "G-5X2GHLPD0J"
//   }


const firebaseApp = firebase.initializeApp(config);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  });

/*
class Login extends Component {
    render (){
        console.log(config)
        const {user, signOut, signInWithGoogle} = this.props;
        if (user != null) {
            console.log(user.getIdToken())
            console.log(user.picture)
        }
        return (
            <div>  
                {user ? <img src={user.photoURL} className="App-logo" alt="logo" /> :<img src={logo} className="App-logo" alt="logo" />}
                { user ? <p>Hola {user.displayName}</p> : <p>Inicia sesion con Google</p>}
                { user ? <button onClick={signOut}>SignOut</button> : <button onClick={signInWithGoogle}>Login</button>}

            </div>
        )
    }
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Login);
  */