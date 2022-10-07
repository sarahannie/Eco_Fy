const express = require('express')
const cookieSession = require("cookie-session")
const passport = require('passport')
const cors = require('cors')
const bodyParser = require('body-parser');
const route = require('./routes')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI,
    (err) =>{
        if(err)
        {
            console.log(err)
        }
        else{
            console.log("connected to mongodb")
        }
    }
    );

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/',route)
// app.use(
//     cookieSession({
//         name: "session",
//         keys: ["ecofly"],
//         maxAge: 24*60*60*100
//     })
// );

// app.use(passport.initialize)
// app.use(passport.session())
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: "GET,POST,PUT DELETE",
//     credentials: true,
// }))

app.use(cors({ credentials:true, origin:'http://localhost:3000', methods: ["GET", "POST"] }));
app.use(cookieParser());
app.listen('5000',()=>{
    console.log('App is listening at port 5000')
})