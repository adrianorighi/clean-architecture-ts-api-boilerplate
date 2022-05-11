import { Router } from 'express'

import { adapteRoute } from '../adpters'
import { makeRealStateValueController } from '../factories'

export default (router: Router): void => {
  router.get('/real-state-value', adapteRoute(makeRealStateValueController()))
}
