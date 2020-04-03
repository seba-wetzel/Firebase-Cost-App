import React, { useState, useEffect } from 'react'
import {Box, LinearProgress, ClickAwayListener} from "@material-ui/core"
import Bit from '../components/bit'

import { connect } from 'react-redux'
import setFabIcon from '../redux/actions/setFabIcon'
import {types} from '../redux/type'

const Elements = (props) => {
  console.log(props.FabIcon)
  const [elements, setElements] = useState({ elements: null, loading: true });
  const [selected, setSelected] = useState(null)


  useEffect(() => {
   if (props.user) {fetch(" https://us-central1-cost-calculator-3ae3c.cloudfunctions.net/api/elements", {
      "method": "GET",
      "headers": {
        "Access-Control-Allow-Origin": "*",
        "authorization": `Bearer ${props.user._lat}`
      }
    })
      .then(response => response.json())
      .then(elements => {
        setElements({ elements, loading: false })
      })
      .catch(err => {
        console.error(err);
      });
    return () => {
      //TODO funcion para cuando el componente se desmonta
    }
}
  }, [props.user])

  const onSelectHandler = (i) => {
    setSelected(i)
    if(i != null)props.FabIcon('EDIT')
    else props.FabIcon('ADD')
  }
  const style = {
    width: "80%",
    margin: "auto",
  }

  return (
    <div style={style}>
      <br/><br/><br/>
      <ClickAwayListener onClickAway={() => onSelectHandler(null)}>
        <div>
          <Box display="flex" justifyContent="flex-start" flexWrap="wrap">
            {elements.loading ?
              <LinearProgress style={{ width: '100%' }}/>
              :
              (
                (elements.elements.map((elements, i) =>
                  <div onClick={() => { onSelectHandler(i) }} key={i} className={"card"}>
                    <Bit image={elements.image} name={elements.name} key={elements.id} selected={(selected === i)} />
                  </div>)
                )
              )
            }
          </Box>
        </div>
      </ClickAwayListener>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.session.user
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
      FabIcon:(icon)=> dispatch({type:icon})   
  }      
}  

export const ElementsR = connect(mapStateToProps, mapDispatchToProps)(Elements)
// export const ElementsR = Elements