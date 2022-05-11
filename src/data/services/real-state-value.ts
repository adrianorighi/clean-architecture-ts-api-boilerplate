import { RealStateValues } from '../../domain/entities'
import { RealStateValue } from '../../domain/usecases'
import { RealStateValueRepository } from '../contracts/real-state-value-repository'

export class RealStateValueService implements RealStateValue {
  // eslint-disable-next-line no-useless-constructor
  constructor (private readonly realStateValueRepository: RealStateValueRepository) { }

  async get (): Promise<RealStateValues> {
    return this.realStateValueRepository.get()
  }
}
