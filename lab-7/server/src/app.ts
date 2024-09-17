
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { BookRouter } from './routes/BookRouter'

const app = express();
app.use(cors());
app.use(express.json());
app.use(BookRouter);



app.use((req:Request,res: Response,next: NextFunction) => {
   res.status(404).json({success: false, error: 'Page Not Found! '});  
})

app.use((err: Error, req: Request,res:  Response, next: NextFunction) => {
    res.status(500).json({success: false, error: err.message});  
 })


const PORT = 3000;
app.listen(PORT, () => {console.log(`Server Run On Port: ${PORT}`);});