import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
.then(() => {
    console.log("DB conection")

    server.listen(PORT, () => {
        console.log(`Server listen on port ${PORT}`);
    })
})
.catch((error) => {
    console.log("Error conection", error);
})
