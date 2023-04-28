// const URL_BASE = 'https://be-a-rym.up.railway.app/api';
// const API_KEY = '8b6bd1748044.3c7b319f29bbb0922084';
const URL_BASE = "https://rickandmortyapi.com/api/character"
const axios = require('axios')

const getCharById= async(req,res) =>{
  try {
  const { id }  = req.params
  const {data} = await axios(`${URL_BASE}/${id}`)
    if ( !data.name) throw Error(`ID:${id} Not found`)
    const characterInfo = {
          id: id,
          status:data.status,
          name:data.name,
          species:data.species,
          origin:data.origin,
          image:data.image,
          gender:data.gender,
      }
    return res.status(200).json(characterInfo)
  } catch (error) { 
    error.message.includes('ID')
    ? res.status(404).send(error.message)
    : res.status(500).send(error.message)
  }
  
}



 module.exports = {
    getCharById,
}
//------------------------------------------------Notas--------------------------------------

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

//const getCharById = (res, id) => {
//   axios(`${URL_BASE}/character/${id}?key=${API_KEY}`)
//     .then((response) => {
//       const { id, name, gender, species, origin, image, status } = response.data;
//       const charact = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status,
//       };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(charact));
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(error.message);
//     });
// };
// module.exports = {
//     getCharById,
// }          

// const characterInfo = {
//             id: character.id,
//             status:character.status,
//             name: character.name,
//             species: character.species,
//             origin: character.origin,
//             image: character.image,
//             gender: character.gender,