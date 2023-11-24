require("dotenv").config();
import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

//---

import UserRouter from "./routers/user_router.js";
import DeviceRouter from "./routers/device_router.js";

//---

const server = express();
server.use(cors());
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express)

server.use("/api", UserRouter);
server.use("/api", DeviceRouter);


mongoose.connection.on("open", function() {
    //console.log(ref);
    console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function(error) {
    console.log("Could not connect to mongo server!");
    console.log(error);
});

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@dev0.agidxfk.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri);

mongoose.connect(uri);

let portNum : number = (Number(process.env.PORT) || 8000);

server.listen(portNum, () => {
    console.log("Server started on port " + portNum);
});