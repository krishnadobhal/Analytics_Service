import express from 'express';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';
import router from './routes/index.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
    res.send('Healthy');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});