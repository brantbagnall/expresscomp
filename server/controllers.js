module.exports={
    getAll: (req,res)=>{
        // COMP 70K
        req.app.get('db').get_all().then(response=>{
            res.status(200).send(response)
        })
    },
    postName: (req,res)=>{
        req.app.get('db').post_name([req.body.first, req.body.last]).then(response=>{
            res.status(200).send(response)
        })
    },
    createTable: (req, res)=>{
        req.app.get('db').create_table(['test2']).then(response=>{
            res.status(200).send(response);
        })
    }
}