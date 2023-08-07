import express from 'express'
import { v4 as uuidv4 } from 'uuid'

import postModel from '../schemas/post-schema.js'

const postRouter = express.Router()

postRouter.get('/', (req, res) => {
    const { page, order, filter } = req.query

    postModel
        .paginate({}, { page: page, limit: 10, sort: { [filter]: order } })
        .then((response) => res.json(response))
        .catch((err) => res.status(404).json({ error: err }))
})

postRouter.get('/:id', (req, res) => {
    const { id } = req.params

    postModel
        .findById(id)
        .then((response) => res.json(response))
        .catch((err) => res.status(404).json({ error: err }))
})

postRouter.post('/', (req, res) => {
    const { description } = req.body

    if (!post.username) return res.status(404).send("Not provided username")

    const newPost = new postModel({ ...post, likes: [], comments: [] })

    newPost.save().then((savePost) => res.json(savePost))
})



export default postRouter