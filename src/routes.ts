import { Router, Request, Response } from 'express';
import multer from 'multer';

import uploadConfig from './config/multer';

import { createUserController } from './controllers/user/createUserController';
import { authUserController } from './controllers/user/authUserController';
import { detailUserController } from './controllers/user/detailUserController';
import { getUserByIdController } from './controllers/user/getUserByIdController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { getAllUsersController } from './controllers/user/getAllUsersController';
import { DeleteCategoryController } from './controllers/category/DeleteCategoryController';
import { PatchCategoryController } from './controllers/category/PatchCategoryController';
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
router.get('/userDetails', isAuthenticated, new detailUserController().handle);
router.get('/userid/:id', new getUserByIdController().handle);
router.get('/AllUsers', new getAllUsersController().handle);

//-- ROTAS CATEGORY -- 
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/AllCategories', isAuthenticated, new ListCategoryController().handle);
router.delete('/deleteCategory', isAuthenticated, new DeleteCategoryController().handle);
router.patch('/category/:id/patch', isAuthenticated, new PatchCategoryController().handle);

//-- ROTAS PRODUCT --
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);

//-- ROTAS ORDER --
router.post('/createOrder', isAuthenticated, new CreateOrderController().handle);
router.delete('/deleteOrder', isAuthenticated, new DeleteOrderController().handle);
router.post('/addItems', isAuthenticated, new AddItemController().handle);
router.delete('/deleteItem', isAuthenticated, new DeleteItemController().handle);
router.patch('/sendOrder', isAuthenticated, new SendOrderController().handle);
router.get('/allOrders', isAuthenticated, new ListOrdersController().handle);
router.get('/orderDetail', isAuthenticated, new DetailOrderController().handle);
router.patch('/finishOrder', isAuthenticated, new FinishOrderController().handle);

export { router };