import { Router } from 'express';
import { NFSController } from '../controllers/NFSController';

const NFSRouter = Router();

NFSRouter.post('/', NFSController.criarNFS);

export default NFSRouter;
