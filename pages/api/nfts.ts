import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { query } = req
    const { address } = query

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const data = {
        jsonrpc: "2.0",
        id: 1,
        method: "qn_fetchNFTs",
        params: {
            wallet: address,
            page: 1,
            perPage: 10,
        },
    };

    axios
        .post(`${process.env.QUICKNODE_URL}/${process.env.QUICKNODE_AUTH_TOKEN}`, data, config)
        .then(function (response) {
            res.status(200).json(response.data)
        })
        .catch((err) => {
            res.status(500)
        });
}
