import { Router } from 'express';
import { PetController } from '../controllers/pets.controller.js'; 
import uploader from '../utils/uploader.js';
import { checkPet } from '../middleware/check.pet.js';

const petsController = new PetController
const pet_in = new checkPet
const router = Router();

router.get('/',petsController.getAllPets);
router.get('/:pid',petsController.getPetById);

 router.post('/',petsController.createPet);
// router.post('/withimage',uploader.single('image'), petsController.createPetWithImage);
 router.put('/:pid',pet_in.VerificaPet, petsController.updatePet);
 router.delete('/:pid',petsController.deletePet);

export default router;