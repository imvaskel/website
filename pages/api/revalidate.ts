import type { NextApiRequest, NextApiResponse } from 'next'

// Allow me to make a request to have the website revalidate my avatar.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.secret !== process.env.revalidate_token) {
        return res.status(401).json({message: "Invalid token"})
    }

    try {
        await res.revalidate("/")
        return res.json({message: "successful"})
    }
    catch (err) {
        return res.status(500).send({message: err})
    }
}