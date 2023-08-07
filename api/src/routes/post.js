const express = require("express")

// import { v4 as uuidv4 } from 'uuid'

const tweetSchema = require("../schemas/tweet")

const postRouter = express.Router()

postRouter.get('/', (req, res) => {
    tweetSchema
        .find()
        .then((response) => res.json(response))
        .catch((err) => res.status(404).json({ error: err }))
})

postRouter.get('/:_id', (req, res) => {
    const { _id } = req.params
    console.log(_id)
    tweetSchema
        .findById(_id)
        .then((response) => res.json(response))
        .catch((err) => res.status(404).json({ error: err }))
})

postRouter.post('/', (req, res) => {
    const { description, image } = req.body


    if (!description) return res.status(404).send("Not provided description")

    const newPost = new tweetSchema({ description, image })

    newPost.save().then((savePost) => res.json(savePost))
})

postRouter.put("/:id", (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    tweetSchema
        .updateOne({ _id: id }, { $set: { description } })
        .then((data) => res.json("Datos actualizados!"))
        .catch((error) => res.json({ message: error }));
});

postRouter.delete("/:id", (req, res) => {
    const { id } = req.params;

    try {
        tweetSchema
            .remove({ _id: id })
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
    } catch (error) {
        console.log(error);
    }

})





module.exports = postRouter;