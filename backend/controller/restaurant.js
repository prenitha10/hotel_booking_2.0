const Restaurant=require('../model/restaurant');
const User=require('../model/user');
//post
const createRestaurant= async(req,res)=>{
    const {number,date,hour,message,name}=req.body;
    if(!number||!date||!hour||!message||!name)
        res.status(400).json({error:"Null values are entered"});
    try{
        
    }
    catch(e)
    {
        
    }
}