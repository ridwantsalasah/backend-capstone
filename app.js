const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const routes = require("./routes/products");
const threadRoutes = require('./routes/thread');

app.use(express.json());
// middleware or set router
app.use("/article", routes);
app.use('/threads', threadRoutes);
// Middleware untuk parsing JSON



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} `);
        });
    }catch (error){
        console.error("Failed to connect to the database:",error);
    }
};

start();