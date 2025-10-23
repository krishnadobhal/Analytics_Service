import express from 'express'
import dotenv from 'dotenv'
import type { Request, Response } from 'express'
import { GetDataByEmail } from '../service/index.js';
const { GetAllData, UniqueIPs, GetClicks, GetBrowserCount } = await import('../repository/Analysis.js');

const router = express.Router();

router.get('/user-data', async (req: Request, res: Response) => {
    try {
        const data = await GetDataByEmail(req.headers.authorization || '');
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});
router.get('/unique', async (req: Request, res: Response) => {
    try {
        const data = await UniqueIPs();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});
router.get('/total-click', async (req: Request, res: Response) => {
    try {
        const data = await GetClicks();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});
router.get('/total-click-browser', async (req: Request, res: Response) => {
    try {
        const data = await GetBrowserCount();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;