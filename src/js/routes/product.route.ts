import {Router, Request, Response } from 'express';
import {ProductService} from '../service/product.service';
import {log} from "util";
const router = Router();

const productService: ProductService = new ProductService();

router.post('/products/create', async (req, res) => {
    // console.log(req.body)
    const result = await productService.create(req);
    res.status(201).send(result)
})

export {router};