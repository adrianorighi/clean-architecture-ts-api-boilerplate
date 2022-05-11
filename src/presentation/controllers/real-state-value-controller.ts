import { Route, Get } from 'tsoa'

import { RealStateValue } from '../../domain/usecases'
import { RealStateValuesViewModel } from '../view-models'
import { Controller, HttpResponse, serverError, ok } from './contracts'

@Route('/v1/real-state-value')
export class RealStateValueController implements Controller {
  // eslint-disable-next-line no-useless-constructor
  constructor (private readonly realStateValue: RealStateValue) { }

  @Get()
  async handle (): Promise<HttpResponse<RealStateValuesViewModel[]>> {
    try {
      const realState = await this.realStateValue.get()
      return ok(RealStateValuesViewModel.map(realState))
    } catch (error) {
      return serverError(error)
    }
  }
}
