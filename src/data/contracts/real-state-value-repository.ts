import { RealStateValues } from '../../domain/entities'

export interface RealStateValueRepository {
  get: () => Promise<RealStateValues>
}
