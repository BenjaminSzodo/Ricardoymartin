const URL_BASE = 'https://be-a-rym.up.railway.app/api';
const API_KEY = '8b6bd1748044.3c7b319f29bbb0922084';
const axios = require('axios')

const getCharById = (res, id) => {
  axios(`${URL_BASE}/character/${id}?key=${API_KEY}`)
    .then((response) => {
      const { id, name, gender, species, origin, image, status } = response.data;
      const charact = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(charact));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
};
module.exports = {
    getCharById,
}

// const getCharById = (res,id)=>{
//     axios(`${URL_BASE}/${id}?key=${API_KEY}`)
//     .then((response) => {
//         const {id,image, name, gender, species, origin,status} = response.data; 
//         let character = {id,image, name, gender, species, origin: origin.name ,status}
//         res.writeHead(200,{'Content-type':'application/json'})
//         res.end(JSON.stringify(character));
//     })
//     .catch((error)=>{
//         res.writeHead(500,{'Content-type':'text/plain'})
//         res.end(error.message);
//     })
// }
// module.exports = {
//     getCharById,
// }