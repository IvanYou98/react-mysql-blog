import express from "express"
import authRouter from './routes/auth.js'
import userRouter from './routes/users.js'
import postRouter from './routes/posts.js'
import { db } from './db.js'

const app = express()
// middlewares
app.use(express.json())
db.connect()

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/post", postRouter)


app.get("/test", (req, res) => {
    res.json("It works!");
})

// listen to port 8800
app.listen(8800, () => {
    console.log("Connected!");
})