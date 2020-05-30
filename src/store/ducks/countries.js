
const Types = {
  SET_COUNTRIES: '@countries/SET_COUNTRIES',
  SET_DATE_LAST_REQUEST: '@countries/SET_DATE_LAST_REQUEST'
}

const initialState = {
  data: [],
  dateLastRequest: null
}

const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SET_COUNTRIES:
      return { ...state, data: payload }
    case Types.SET_DATE_LAST_REQUEST:
      return { ...state, dateLastRequest: payload }
    default:
      return state
  }
}

export const Actions = {
  setCountries: (payload) => ({
    type: Types.SET_COUNTRIES,
    payload,
  }),
  setDateLastRequest: (payload) => ({
    type: Types.SET_DATE_LAST_REQUEST,
    payload,
  }),
}

export default countriesReducer
