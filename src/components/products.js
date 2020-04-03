import React from 'react'
import { connect } from 'react-redux'

const Products = (props)=> {
        return (
            <div>
                <p>Product</p>
                {props.user ? (<p>{JSON.stringify(props.user.displayName)}</p>) :  (<p> nulos</p>)}
                <button onClick={props.logout}> coso</button>
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
        logout:()=> dispatch({type: 'logout'})   
    }      
}  

export const ProductsR = connect(mapStateToProps, mapDispatchToProps)(Products)

