const express = require("express")
const router = express.Router()


router.get('/',(req,res)=>{
    res.send('<a href="files/shops">shops</a>   <a href="files/pepole">pepole</a>')
})

router.get('/shops',(req,res)=>{
    res.sendFile("shops.html",{root:__dirname})
})
router.get('/pepole',(req,res)=>{
    res.sendFile("pepole.html",{root:__dirname})
})

module.exports =router;