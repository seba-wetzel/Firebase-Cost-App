const {db} = require('../middleware/admin');
const uuidv4 = require ('uuid').v4;

const createElement = (req, res)=>{
    const data = {...req.body};
    data.id = uuidv4();
    console.log(data.id)

     db.collection('elements').doc(`${data.id}`).set(data)
    .then((i)=>{
        console.log(i)
    })
    .catch(err=>{
        console.log(err)
    })
    return res.json(data)
}

const getAllElements = (req, res)=>{
     db.collection('elements').get()
    .then((i)=>{
        let elements = [];
        i.forEach(element => {
            elements.push(element.data());
        });
        return res.status(200).json(elements)
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json(err);
    })
    
}

module.exports = {createElement, getAllElements}