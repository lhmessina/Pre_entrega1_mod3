// import {Router} from "express"
// import usersController, { UserControllers } from '../controllers/users.controller.js';


// const router = Router();
// const userControll = new UserControllers()


// router.get('/', userControll.getAllUsers);

// // router.get('/:uid',usersController.getUser);
// // router.put('/:uid',usersController.updateUser);
// // router.delete('/:uid',usersController.deleteUser);


// export default router;

import { Router } from "express";
import { UserControllers } from "../controllers/users.controller.js";

import{ checkUser} from "../middleware/check.user.js";
const usersController = new UserControllers();
const User_IN = new checkUser()
const router = Router();

router.get("/", usersController.getAllUsers);

//router.get("/mock", usersController.createUserMock);

router.get("/:uid", usersController.getUser);


router.post("/", User_IN.VerificaUser,usersController.createUser);
router.put("/:uid", usersController.updateUser);
router.delete("/:uid", usersController.deleteUser);

export default router;
