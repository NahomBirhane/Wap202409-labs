
import Router from 'express';
import { json } from 'stream/consumers';
const router = Router();

router.get('/', (req,res) => {
    res.send('<h3>List Of Users</h3>');
});

router.post('/', (req,res) => {
    const newUser = req.body;
    res.send(`User Added: ${JSON.stringify(newUser)}`);
});
export default router;