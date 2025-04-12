import {Router} from "express"
import usersRouter from "./usersRouter";
import salesRouter from "./salesRouter"

const router: Router = Router();

router.use("/users", usersRouter);
router.use("/sales", salesRouter);

export default router;