import { Router} from 'express';
//import adoptionsController from '../controllers/adoptions.controller.js';
import { AdoptionController } from '../controllers/adoptions.controller.js';

const adoptions_controller = new AdoptionController
const router = Router();

router.get('/',adoptions_controller.getadoption);
router.get('/:aid',adoptions_controller.getAdoptionById);
router.delete('/:aid',adoptions_controller.deleteAdoption);
//router.get('/',AdoptionController.getAllAdoptions);

// router.get('/:aid',adoptions_controller.getAdoption);
 router.post('/:uid/:pid',adoptions_controller.createAdoption);

export default router;