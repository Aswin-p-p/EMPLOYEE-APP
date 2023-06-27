const express = require('express')
const registerModel = require('../models/Registration')
const RegRouter = express.Router()
const multer = require("multer")
var bcrypt = require('bcryptjs');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/upload/')
    },
    filename: function (req, file, cb) {
        cb(null, req.body.name)
    }
})

const upload = multer({ storage: storage })

RegRouter.post('/upload', upload.single("file", (req, res) => {
    return res.json("file upload")
}))



RegRouter.post('/check-register', async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, number, qualification, experience, password, image } = req.body   // get all data from registration form
        const olduser = await registerModel.findOne({ name: name })   // to check user already exist or not
        console.log(olduser);


        if (olduser) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "username is already existed"
            })

        }
        const oldno = await registerModel.findOne({ number }) // check phone number exist or not
        if (oldno) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "number is already existed"
            })
        }
       const hashedPass =await bcrypt.hash(password, 12)
        const result = await registerModel.create({ name, email, number, qualification, experience, password:hashedPass, image ,role:1,status:0,})  // insert data to register table
        if (result) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "registration completed"
            })
        }


    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: "something went wrong"
        })
    }
})

//...................view...............------------------

RegRouter.get('/view-user', async (req, res) => {
    try {
        const user = await registerModel.find()
        res.status(200).json({
            success: true,
            error: false,
            details: user,
        })
    } catch (error) {
        console.log(error);
    }
})

//............view-single...............

RegRouter.get('/single-view/:id', async (req, res) => {
    try {
        const id = req.params.id
        console.log(id);
        const user = await registerModel.findOne({ _id: id })
        res.status(200).json({
            success: true,
            error: false,
            data: user
        })
    } catch (error) {
        console.log(error);
    }
})

//.................delete.........................

RegRouter.get('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await registerModel.deleteOne({ _id: id })
        res.status(200).json({
            success: true,
            error: false,
            data: user
        })
    } catch (error) {

    }
})

//  --------------------update---------------------

RegRouter.post('/updateuser/:id', async (req, res) => {

    const data = {
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        qualification: req.body.qualification,
        experience: req.body.experience
    }


    try {
        const id = req.params.id
        const user = await registerModel.updateOne({ _id: id }, { $set: data })
        res.status(200).json({
            success: true,
            error: false,
            data: user


        })
    } catch (error) {
        console.log(error);
    }
})

//-------------------------Login------------------------------

RegRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log(req.body);

        const oldu = await registerModel.findOne({ email })
        console.log(oldu);
        if (!oldu) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "email not matching"
            })

        }
 
        const check = await bcrypt.compare(password, oldu.password)  // true or false
        if ( !check ) {
            console.log(oldu.password);

            return res.status(400).json({
                success: false,
                error: true,
                message: "password  not matching"
            })

        }
        return res.status(200).json({
            success: true,
            error: false,
            message: "successfuly logined",
            data: oldu
        })



    } catch (error) {
        console.log(error);
    }               
})




module.exports = RegRouter
