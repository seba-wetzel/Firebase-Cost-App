import React, { Component } from 'react'
import store from '../redux/store'

const CreateProduct = (props)=> {

        console.log(props)

        //console.log(this.props.user)
        return (
            <div>
                <p>Product</p>
                {props.user ? (<p>{JSON.stringify(props.user.displayName)}</p>) :  (<p> nulos</p>)}
            </div>
        )

}

export default CreateProduct;
