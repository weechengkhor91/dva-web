import request from '../utils/request';

export function query() {
  return request('/api/users');
}
export function userInfo(){
  return request('https://my-json-server.typicode.com/typicode/demo/posts');
}
