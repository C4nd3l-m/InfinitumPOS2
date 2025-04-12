import express, { Application } from "express"
import router from "./routes/indexRoutes"
import cors from "cors" 
import morgan from "morgan";
const server: Application = express();

server.use(express.json())
server.use(morgan("dev"));
server.use(cors())
server.use(router)

export default server;