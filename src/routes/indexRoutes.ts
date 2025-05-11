import {Router} from "express"
import usersRouter from "./usersRouter";
import salesRouter from "./salesRouter"
import statsRoutes from "./statsRoutes";

const router: Router = Router();

router.use("/users", usersRouter);
router.use("/sales", salesRouter);
router.use("/stats", statsRoutes);

export default router;


