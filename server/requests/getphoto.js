const fs = require('fs-extra')
const path = require('path')
module.exports = async function(req,res){
    const photoNumber = req.params.id;
    
    try{
        const photosList= await fs.readdir(__dirname+'/../photos/')
        console.log(path.resolve('./photos/'+photosList[photoNumber]))
        res.sendFile(path.resolve('./photos/'+photosList[photoNumber]))
    }catch(e){
        res.status(500).send(e)
    }
}