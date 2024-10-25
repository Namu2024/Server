const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require ('./models/Users')

const app = express()
app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://Namrata:Sdc$2020@namu.vvvqu.mongodb.net/mern?retryWrites=true&w=majority&appName=namu")

app.get("/getUsers", (req,res) => {
    UserModel.find({}).then(function(users){
        res.json(users)
    }).catch(function(err){
        res.json(err)
    })

})

app.post ("/createUser", async (req, res) =>{
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
})

app.listen(process.env.PORT, () => {
        console.log(`Server running at port ${process.env.post}`);
    });








// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const UserModel = require('./models/Users');

// const app = express();
// app.use(cors({
//     origin: 'https://sdcproject.netlify.app/', // Netlify URL ka origin yahan daalein
//     methods: ['GET', 'POST'], // Allowed methods
// }));
// app.use(express.json());

// mongoose.connect("mongodb+srv://Namrata:Sdc$2020@namu.vvvqu.mongodb.net/mern?retryWrites=true&w=majority&appName=namu");

// app.get("/getUsers", (req, res) => {
//     UserModel.find({})
//         .then(users => res.json(users))
//         .catch(err => res.status(500).json(err));
// });

// app.post("/createUser", async (req, res) => {
//     const user = req.body;
//     const newUser = new UserModel(user);
//     try {
//         await newUser.save();
//         res.json(newUser);
//     } catch (err) {
//         res.status(500).json({ error: "Error saving the user" });
//     }
// });

// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
// });

