import mongoose from "mongoose";

export const DBconnection = ()=>{
    mongoose.connect(process.env.mongo_url,{
      dbName: "reactWeb",
    }).then(()=>{
      console.log("connected sussesfully");
    }).catch(()=>{
        console.log("some error occurs")
    })
}