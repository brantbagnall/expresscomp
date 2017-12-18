module.exports={
    getAll: (req,res)=>{
        req.app.get('db').get_all().then(response=>{
            res.status(200).send(response)
        })
    }
}