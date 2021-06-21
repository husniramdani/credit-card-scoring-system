import { formActionTypes } from './action'

const formInitialState = {
  nama: "",
}

export default function reducer(state = formInitialState, action) {
  switch (action.type) {
    case formActionTypes.ADD_STEP_1:
      return Object.assign({}, state, {
        nama: action.data,
      })
    default:
      return state
  }
}
