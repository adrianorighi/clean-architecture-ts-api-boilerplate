import { Controller } from '../../presentation/controllers/contracts'

export const adaptResolver = async (controller: Controller): Promise<any> => {
  const httpResponse = await controller.handle()
  return httpResponse.data
}
