import axios from 'axios';


export function getGrower () {
  
   return axios.
          get('https://my-json-server.typicode.com/pedroskakum/fake-api/grower',{
            headers: {
               'Access-Control-Allow-Origin': '*',
             },
             proxy: {
               host: 'http://localhost:8080/',
               port: 8080
             }
          })
          
}