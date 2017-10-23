const fs = require('fs-extra')

module.exports = async function (req,res){
    fs.readdir(__dirname+'/../photos')
        .then(result=>{
            res.send(result)
        })
        .catch(err=>res.status(500).send(err))
}