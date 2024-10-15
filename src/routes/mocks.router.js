import {Router} from "express"
import { MockController } from "../controllers/mock.controller.js";

const getmock = new MockController  // tiene el metodo getMocks
const router = Router();

router.post('/generatedata/:amountUsers/:amountPets', getmock.generateAmount )
router.get('/mokingusers', getmock.getUsersMock )
//router.get('/mokingpetss', getmock.getMocks )



export default router;