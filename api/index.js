const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const cors = require("cors")

const postRouter = require("./src/routes/post")

dotenv.config()

const PORT = process.env.PORT || 3001

const expressApp = express()

expressApp.use(express.json())

expressApp.use(cors({ origin: true, credentials: true }))

expressApp.use('/post', postRouter)

const bootstrap = () => {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        expressApp.listen(PORT, () => {
            console.log(`Server is listening on ${PORT}`)
        })
    })
}

bootstrap()