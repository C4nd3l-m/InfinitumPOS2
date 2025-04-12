import { Router, Request, Response } from "express"; 
import { UserLoginDto, UserRegisterDto } from "../dto/UserDto";
import { userLoginController, userRegisterController, getUserByIdController } from "../controllers/userControllers";

const usersRouter: Router = Router();

usersRouter.get("/:id", (req: Request<{id: string}>, res: Response) => getUserByIdController(req, res))

usersRouter.post("/register", (req: Request<unknown, unknown, UserRegisterDto>, res: Response) => userRegisterController(req, res))

usersRouter.post("/login", (req: Request<unknown, unknown, UserLoginDto>, res: Response) => userLoginController(req, res))

export default usersRouter;