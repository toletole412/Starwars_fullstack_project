import * as request from 'superagent'

const baseUrl = "http://localhost:3000"

export const FETCH_PEOPLE = "FETCH_PEOPLE"


export const fetchPeople = () => dispatch => {
  request
    .get(`${baseUrl}/people`)
    .then(response => {
      dispatch({
        type: FETCH_PEOPLE,
        payload: response.body.people.results
      })
    })
    .catch(err => alert(err))
}
