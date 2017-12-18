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
        req.app.get('db').create_table().then(response=>{
            res.status(200).send(response);
        })
    },
    searchByFirstName: (req, res)=>{
        // COMP 76E
        req.app.get('db').search_by_first_name([req.query.first]).then(response=>{
            res.status(200).send(response);
        })
    },
    editById: (req, res)=>{
        // COMP 76D
        req.app.get('db').edit_by_id([req.params.id]).then(response=>{
            res.status(200).send(response);
        })
    },
    deleteById: (req, res)=>{
        // COMP 76D
        req.app.get('db').delete_id([req.params.id]).then(response=>{
            res.status(200).send(response);
        })
    }
}