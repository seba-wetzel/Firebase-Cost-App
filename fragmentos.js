// Son las cosas de que saque de los ejemplos de firebase-react     
     
     
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            
            return (
              <pre style={{ height: 300, overflow: "auto" ,marginTop:100}}>
                {JSON.stringify({user },null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>

          <IfFirebaseAuthed>
            {() => {
              return <div>You are authenticated</div>;
            }}
          </IfFirebaseAuthed>
          <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== "anonymous"}
          >
            {({ providerId }) => {
              return <div>You are authenticated with {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd>
          <button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In with Google
        </button>
        
        <button
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Sign Out
        </button>

///cosas de tabs 
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';
import { red } from '@material-ui/core/colors';

const styles = {
  tabs: {
    background: '#fff',
    height: '100%'
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
    height: '100%'
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

class DemoTabs extends React.Component {
  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };



  render() {
  
    return (
      <div >
        {/* <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
        </SwipeableViews> */}
        <p>Element</p>
      </div>
    );
  }
}