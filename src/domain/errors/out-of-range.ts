export class OutOfRangeError extends Error {
  constructor () {
    super('Out of range values')
    this.name = 'OutOfRangeError'
  }
}
