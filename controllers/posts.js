const Posts = require('../models/posts');

exports.getPosts = async(req,res,next) => {
    try{
        const posts = await Posts.findAll()

        res.status(200).json({
            status: 'OK',
            posts
        })

    }catch(error){
        res.status(400).json({message: error.message})
    }

}


exports.postNewPost = async(req,res,next) => {
    try{
        const {name, description, stock} = req.body;

        const newPost = await Posts.create({name, description, stock})

        res.status(200).json({
            status: 'OK',
            newPost
        })

    }catch(error){
        res.status(400).json({message: error.message})
    }

}

exports.getPostDetail = async(req,res,next) => {
    try{
        const id = req.params.id
        const post = await Posts.findByPk(id)

        res.status(200).json({
            status: 'OK',
            post
        })

    }catch(error){
        res.status(400).json({message: error.message})
    }

}

exports.updatePost = async(req,res,next) => {
    try{
        const id = req.params.id
        const {name, description, stock} = req.body
        const post = await Posts.findByPk(id)

        post.name = name
        post.description = description
        post.stock = stock

        await post.save();

        res.status(200).json({
            status: 'OK',
            post
        })

    }catch(error){
        res.status(400).json({message: error.message})
    }

}

exports.deletePost = async(req,res,next) => {
    try{
        const id = req.params.id
        const post = await Posts.findByPk(id)

        await post.destroy();

        res.status(200).json({
            status: 'OK',
            post
        })

    }catch(error){
        res.status(400).json({message: error.message})
    }

}