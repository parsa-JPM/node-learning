import express from 'express';
import checkName from '../controller/nameController.js';

const router = express.Router();

router.post("/api/test", checkName)
// or
// benefit is that we can chain http methods for one url
// router.route.get("/api/test", checkName).post(checkNamePost)

export default router;