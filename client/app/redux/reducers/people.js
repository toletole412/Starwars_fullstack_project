import { FETCH_PEOPLE } from '../actions/people'

export default (state = [], { type, payload } = {}) => {
    switch (type) {
      case FETCH_PEOPLE:
        return payload

      default:
        return state
    }
}
