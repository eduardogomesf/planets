import { NextApiRequest, NextApiResponse } from 'next'
import planetsJSON from '../../data/planets.json'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    return res.status(200).json({ planets: planetsJSON })
}