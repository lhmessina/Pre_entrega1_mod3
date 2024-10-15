import { Router } from 'express';
import { PetController } from '../controllers/pets.controller.js'; 
import uploader from '../utils/uploader.js';

const petsController = new PetController
const router = Router();

router.get('/',petsController.getAllPets);
router.get('/:pid',petsController.getPetById);

 router.post('/',petsController.createPet);
// router.post('/withimage',uploader.single('image'), petsController.createPetWithImage);
// router.put('/:pid',petsController.updatePet);
 router.delete('/:pid',petsController.deletePet);

export default router;