import express from "express"
import authRouter from './routes/auth.js'
import userRouter from './routes/users.js'
import postRouter from './routes/posts.js'
import { db } from './db.js'
import cookieParser from "cookie-parser"
import multer from "multer"

const app = express()
// middlewares
app.use(express.json())
app.use(cookieParser())
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage });


app.post("/api/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    return res.status(200).json(file.filename);
});
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