import { sendRequest } from "./sendRequest"
const BASE_URL = '/api/user/logs'

// :userId/logs/newlog

export function getAll() {
    return sendRequest(BASE_URL);
  }
  
  export function create(log) {
    return sendRequest(`${BASE_URL}`, "POST", log);
  }
  
  export function update(log) {
    return sendRequest(`${BASE_URL}/${log._id}`, "PUT", log);
  }
  
  export function deleteOne(id) {
    return sendRequest(`${BASE_URL}/${id}`, "DELETE");
  }