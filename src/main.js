const dotenv = require("dotenv")
dotenv.config();
const express = require("express");
const app = express();
const connectToDB = require('./api/config/database')
const logMiddleware = require("./api/middlewares/logs.middlewares")
const errorsMiddleware = require("./api/middlewares/errors.middleware")

//connect to database
connectToDB()
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(logMiddleware);



//routes
app.use("/api/task",require("./api/routes/task.routes"));
app.use("/api/auth", require("./api/routes/auth.routes"));
app.use(errorsMiddleware);


const port = process.env.APP_PORT || 3000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});


