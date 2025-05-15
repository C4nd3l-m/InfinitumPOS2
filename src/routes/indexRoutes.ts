import {Router} from "express"
import usersRouter from "./usersRouter";
import salesRouter from "./salesRouter"
import statsRoutes from "./statsRouter";
import productsRouter from "./productsRouter"

const router: Router = Router();

router.use("/users", usersRouter);
router.use("/sales", salesRouter);
router.use("/stats", statsRoutes);
router.use("/products", productsRouter)

export default router;


