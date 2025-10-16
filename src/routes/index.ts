import express from 'express'
import dotenv from 'dotenv'
import type { Request, Response } from 'express'
const { GetAllData, UniqueIPs, GetClicks, GetBrowserCount } = await import('../service/index.js');

const router = express.Router();

router.get('/data', async (req: Request, res: Response) => {
    try {
        const data = await GetAllData();
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