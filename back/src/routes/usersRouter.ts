import { Router, Request, Response } from "express"; 
import { UserLoginDto, UserRegisterDto } from "../dto/UserDto";

const usersRouter: Router = Router();

usersRouter.get("/:id", (req: Request<{id: string}>, res: Response) => getUserById(req, res))

usersRouter.post("/register", (req: Request<unknown, unknown, UserLoginDto>, res: Response) => userLoguinController(req, res))

export default usersRouter;