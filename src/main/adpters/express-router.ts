import { Request, Response } from 'express'

import { Controller } from '../../presentation/controllers/contracts'

export const adapteRoute = (controller: Controller): any => {
  return async (req: Request, res: Response) => {
    const httpReponse = await controller.handle()
    res.status(httpReponse.statusCode).json(httpReponse.data)
  }
}
