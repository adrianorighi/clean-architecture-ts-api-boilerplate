
import { RealStateValueRepository } from '../../data/contracts/real-state-value-repository'
import { RealStateValueDto } from '../../data/dtos/real-state-value'
import { realStateValue } from '../data-sources'

export class FixedRealStateValueRepository implements RealStateValueRepository {
  async get (): Promise<RealStateValueDto> {
    return realStateValue
  }
}
