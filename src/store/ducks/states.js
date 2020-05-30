
const Types = {
  SET_STATES: '@states/SET_STATES',
  SET_DATE_LAST_REQUEST: '@states/SET_DATE_LAST_REQUEST'
}

const initialState = {
  data: [],
  dateLastRequest: null
}

const statesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SET_STATES:
      return { ...state, data: payload }
    case Types.SET_DATE_LAST_REQUEST:
      return { ...state, dateLastRequest: payload }
    default:
      return state
  }
}

export const Actions = {
  setStates: (payload) => ({
    type: Types.SET_STATES,
    payload,
  }),
  setDateLastRequest: (payload) => ({
    type: Types.SET_DATE_LAST_REQUEST,
    payload,
  }),
}

export default statesReducer
