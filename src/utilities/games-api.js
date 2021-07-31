import {sendRequest} from "./sendRequest"
const BASE_URL = '/api/games'

export function getAll() {
    return sendRequest(BASE_URL);
  }
  
  export function create(game) {
    return sendRequest(BASE_URL, "POST", game);
  }
  
  export function update(game) {
    return sendRequest(`${BASE_URL}/${game._id}`, "PUT", game);
  }
  
  export function deleteOne(id) {
    return sendRequest(`${BASE_URL}/${id}`, "DELETE")
  }