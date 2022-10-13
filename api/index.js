import express from "express"

const app = express()
// middlewares
app.use(express.json())


app.get("/test", (req, res) => {
    res.json("It works!");
})

// listen to port 8800
app.listen(8800, () => {
    console.log("Connected!");
})