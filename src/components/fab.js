import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import { connect } from 'react-redux'

const FabB = (props) => {
    if (props.icon === 'ADD'){
    return (
        <Fab color="primary" aria-label="add" className={props.class}>
            <AddIcon />
        </Fab>
    )}
    else if (props.icon === 'EDIT'){
        return (
            <Fab color="primary" aria-label="add" className={props.class}>
                <EditIcon />
            </Fab>
        )}
        else return null
}

const mapStateToProps = (state) => {
    return {
      icon: state.fabIcon.icon
    }
  }
  
const mapDispatchToProps = (dispatch)=>{
    return{
        action:(action,id)=> dispatch({type: 'logout'})   
    }      
}

const FabR = connect(mapStateToProps, mapDispatchToProps)(FabB)

export default FabR
