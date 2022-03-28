import {Router, Request, Response } from 'express';
import {ProductService} from '../service/product.service';
const router = Router();

const productService: ProductService = new ProductService();

router.post('/products/create', async (req, res) => {
    const result = await productService.create(req);
    res.status(201).send(result)
})

router.get('/products/get-all', async (req,res) => {
    const result = await productService.getAll(req);
    res.send(result)
})
export {router};