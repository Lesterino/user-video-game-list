import { sendRequest } from "./sendRequest"
const BASE_URL = '/api/user'

export function getAll(userId) {
    return sendRequest(`${BASE_URL}/${userId}/logs`);
  }
  
  export function create(log, userId) {
    return sendRequest(`${BASE_URL}/${userId}/logs`, "POST", log);
  }
  
  export function update(log) {
    return sendRequest(`${BASE_URL}/logs/${log._id}`, "PUT", log);
  }
  
  export function deleteOne(logId) {
    console.log('hits delete api');
    return sendRequest(`${BASE_URL}/logs/${logId}`, "DELETE")
  }