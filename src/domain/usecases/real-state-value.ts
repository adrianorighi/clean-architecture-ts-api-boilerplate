import { RealStateValues } from '../entities'

export interface RealStateValue {
  get: () => Promise<RealStateValues>
}
