const {admin, db} = require('../middleware/admin');
const uuidv4 = require ('uuid').v4;

const createProduct = (req, res)=>{
    const data = {...req.body};
    data.id = uuidv4();
    console.log(data.id)

     db.collection('products').doc(`${data.id}`).set(data)
    .then((i)=>{
        console.log(i)
    })
    .catch(err=>{
        console.log(err)
    })
    return res.json(data)
}

module.exports  = {createProduct}