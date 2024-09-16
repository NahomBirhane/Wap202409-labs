
import Router from 'express';

const router = Router();

router.get('/', (req,res) => {
    res.send(`<h3>List Of Products:</h3>`);
});

router.post('/',(req,res)=> {
    const newProduct = req.body;
    res.send(`Product added: ${JSON.stringify(newProduct)}`);
});

export default router;