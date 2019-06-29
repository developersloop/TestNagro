import axios from 'axios';


export function getGrower () {
   return axios.
          get('https://my-json-server.typicode.com/pedroskakum/fake-api/grower')
          
}