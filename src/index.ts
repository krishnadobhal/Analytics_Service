import express from 'express';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Healthy');
});

app.get('/data', async (req: Request, res: Response) => {
    try {
        const { GetAllData } = await import('./service/index.js');
        const data = await GetAllData();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});