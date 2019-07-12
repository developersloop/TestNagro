import axios from 'axios';

export function getProperties() {
   return axios.
          get(`https://my-json-server.typicode.com/pedroskakum/fake-api/properties`,{
            headers: {
               'Access-Control-Allow-Origin': '*',
             },
             proxy: {
               host: 'http://localhost:8080/',
               port: 8080
             }
          })
          
}

export function postProperties(ident,data){
   const {id,city,total_area,name_propriedade,growerId} = data;
   const dt = {
      id,
      name_propriedade,
      total_area,
      city, 
      growerId:ident      
    }
    return axios.
    post(`https://my-json-server.typicode.com/pedroskakum/fake-api/properties`,dt,{
      headers: {
         'Access-Control-Allow-Origin': '*',
       },
       proxy: {
         host: 'http://localhost:8080/',
         port: 8080
       }
    })
   
}