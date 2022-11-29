const express=require("express")

const app = express()


const CLIENT_ID="df8a69bf8c32b9d535b0"
const CLIENT_SECRET="5e323bef5c33c33342e48d8a7ff4f291b91e77e5"
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname +"/index.html")
})

app.get('/github/callback', (req, res) => {
    console.log(req.query.code)
    res.send("Sign in with github Success")
})

app.listen(8080, () => {console.log('server started on port 8080')})