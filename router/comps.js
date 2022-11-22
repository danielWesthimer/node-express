const express = require("express")
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('<a href="comps/factory">factory</a>   <a href="comps/prime">primes</a>')
});
router.get('/factory',(req,res)=>{
    res.send('<h1>  enter number in url</h1>')
});
router.get('/prime',(req,res)=>{
    res.send('<h1>  enter number in url</h1>')
});

router.get('/factory/:userNumId',(req,res)=>{
    const userNumId = req.params.userNumId;
    
                  function factoryFunc(num){
                    let y = 1;
                    for (let i = 1; i <= num; i++) {
                        y *= i
                    }
                    return y;
                }
    res.send(factoryFunc(userNumId).toString())
})

router.get('/prime/:userNumberId',(req,res)=>{
    const userNumberId = req.params.userNumberId;
    
                  function primeFunc(num){
                    for (let j = 2; j < num; j++) {
                        if(num % j == 0){return}
                       }
                     return true
                }
               if (primeFunc(userNumberId)){res.send("the number is prime")}
               else {res.send("the number is not prime")}
    
})


module.exports =router;