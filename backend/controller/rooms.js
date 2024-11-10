const Rooms=require('../model/Rooms');

const Deluxerooms=async(req,res)=>{
    const {adults,children,rooms,startDate,endDate,comment}=req.body;
    if(!adults||!children||!rooms||!startDate||!endDate||!comment) res.status(400).json({error:"Values not present"});
    try{

    }
    catch{
        
    }
}