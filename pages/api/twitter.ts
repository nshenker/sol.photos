// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from 'twitter-api-sdk'

type Data = {
  name: string
  profile_image: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req
  const { handle } = query

  const client = new Client(process.env.TWITTER_BEARER_TOKEN as string)

  client.users
    .findUserByUsername(typeof handle === 'string' ? handle : handle[0], {
      'user.fields': ['name', 'profile_image_url'],
    })
    .then((response) => {
      res.status(200).json({
        name: response.data?.name ?? '',
        profile_image: response.data?.profile_image_url ?? '',
      })
    })
}
