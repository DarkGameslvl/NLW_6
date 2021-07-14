import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export function ensureAuthenticate(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).end()
  }

  const token = authToken.split(' ')[1]

  try {
    const { sub } = verify(token, '913ce499142796bfb73ff75c5ea9bd3b') as IPayload

    req.user_id = sub

    return next()
  } catch (err) {
    return res.status(401).end()
  }
}
