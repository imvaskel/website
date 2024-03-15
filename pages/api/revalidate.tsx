import type { NextApiRequest, NextApiResponse } from 'next'

type Response = {
    ok: boolean
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    res.revalidate("/");

    res.status(200).json({ok: true});
}