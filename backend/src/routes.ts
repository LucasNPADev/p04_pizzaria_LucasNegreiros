import { Router, Request, Response } from 'express';
import multer from 'multer';

import uploadConfig from './config/multer';

import { createUserController } from './controllers/user/createUserController';
import { authUserController } from './controllers/user/authUserController';
import { detailUserController } from './controllers/user/detailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { DeleteOrderController } from './controllers/order/DeleteOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { DeleteItemController } from './controllers/order/DeleteItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrdersController } from './controllers/order/ListOrdersController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

// -- ROTA DE TESTE --
router.get('/teste', (req: Request, res: Response) => {
  return res.json({ ok: true });
});

//-- ROTAS USERS -- 
router.post('/users', new createUserController().handle);
router.post('/session', new authUserController().handle);
router.get('/me', isAuthenticated, new detailUserController().handle);

//-- ROTAS CATEGORY -- 
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/category', isAuthenticated, new ListCategoryController().handle);

//-- ROTAS PRODUCT --
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);

//-- ROTAS ORDER --
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new DeleteOrderController().handle);
router.post('/order/add', isAuthenticated, new AddItemController().handle);
router.delete('/order/remove', isAuthenticated, new DeleteItemController().handle);
router.patch('/order/send', isAuthenticated, new SendOrderController().handle);
router.get('/orders', isAuthenticated, new ListOrdersController().handle);
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle);
router.patch('/order/finish', isAuthenticated, new FinishOrderController().handle);

export { router };