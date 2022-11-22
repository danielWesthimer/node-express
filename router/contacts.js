const express = require("express")
const router = express.Router()


const myJson=[
    {
        "id": "1",
        "name": "slomo",
        "address": "Jerusalem"
    },
    {
        "id": "2",
        "name": "chaim",
        "address": "Tzfat"
    },
    {
        "id": "3",
        "name": "moshe",
        "address": "Beit-shemesh"
    }
  ]


parseJson = JSON.parse(JSON.stringify(myJson))
router.get('/',(req,res)=>{
    res.send(parseJson)
})

router.get('/:userId',(req,res)=>{
    const userId = req.params.userId
    res.send(parseJson[userId-1])
})

module.exports =router;