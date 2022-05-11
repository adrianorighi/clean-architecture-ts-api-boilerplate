import { RealStateValues } from '../../domain/entities'

export class RealStateValuesViewModel {
  valuePerMeter!: number

  static map (entity: RealStateValues): RealStateValuesViewModel {
    return entity
  }

  static mapCollection (entities: RealStateValues[]): RealStateValuesViewModel[] {
    return entities.map(entity => RealStateValuesViewModel.map(entity))
  }
}
