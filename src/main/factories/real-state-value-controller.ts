import { RealStateValueService } from '../../data/services'
import { FixedRealStateValueRepository } from '../../infra/repositories'
import { Controller } from '../../presentation/controllers/contracts'
import { RealStateValueController } from '../../presentation/controllers/real-state-value-controller'

export const makeRealStateValueController = (): Controller => {
  const repo = new FixedRealStateValueRepository()
  const loader = new RealStateValueService(repo)
  return new RealStateValueController(loader)
}
