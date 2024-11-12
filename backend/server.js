import app from "./app.js"

app.listen(process.env.PORT,()=>{
    console.log(`server run on port ${process.env.PORT}`)
})