export const formActionTypes = {
  ADD_STEP_1: 'ADD_STEP_1',
}

export const addStep1 = (data) => (dispatch) => {
  return dispatch({
    type: formActionTypes.ADD_STEP_1,
    data: data
  })
}
