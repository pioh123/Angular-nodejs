const { Router } = require('express');
const router = Router()
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.get('/',(req, res)=>{
    res.send('hello world');
})
router.post('/signup', async (req, res)=>{
    var { email, password } = req.body
    var newUser = new User({email:email, password:password});

    await newUser.save(); //this methos is asycrono , add await
    var token = jwt.sign({_id:newUser._id},'secretKey');
    res.status(200).json({token:token});
})
router.post('/signin', async (req, res)=>{
    const { email, password} = req.body;
    const user = await User.findOne({email:email});
    
    if(!user)
        return res.status(401).send("the email doesn't exits!!");
    if(user.password !== password)
        return res.status(401).send("the password is wrong");
    
    var token = jwt.sign({_id:user._id}, 'secretKey');
    return res.status(200).json({token:token})
})
router.get('/tasks', (req, res)=>{
    res.json([
        {
            _id:1,
            name: "task1"
        },
        {
            _id:2,
            name: "task2"
        },
        {
            _id:3,
            name: "task3"
        }
    ])
})
router.get('/private', verifytoken, (req, res)=>{

    res.json([
        {
            _id:1,
            name: "task1"
        },
        {
            _id:2,
            name: "task2"
        },
        {
            _id:3,
            name: "task3"
        }
    ])
})
module.exports = router;

function verifytoken(req, res, next){ //next is used in router express
    if(!req.headers.authorization)
        return res.status(401).send("unauthorized")
    var token = req.headers.authorization;
    if(token === 'null')
        return res.status(401).send('unauthorized');
    
    var payload = jwt.verify(token,'secretKey')
    req.userId = payload.id;
    next()
    
}