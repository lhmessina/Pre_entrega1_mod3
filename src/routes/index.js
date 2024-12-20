import {Router} from "express"
import usersRouter from "./users.router.js"
import petsRouter from "./pets.router.js"
import adoptionsRouter from "./adoption.router.js"
import sessionsRouter from "./sessions.router.js"
import mocksRouter from "./mocks.router.js"

const router = Router();

router.use('/users',usersRouter);
router.use('/pets',petsRouter);
router.use('/adoptions',adoptionsRouter);
router.use('/sessions',sessionsRouter);
router.use('/mocks',mocksRouter);

// //router.get('/mockingpets', getmock.getMocks )

 export default router;