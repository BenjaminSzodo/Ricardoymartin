const PORT = 3001;
const server = require('./app')
const { conn } = require('./DB_connection')

conn.sync(
        {altern: true}
).then(()=>{
        server.listen(PORT, () => {
                console.log('Server raised in port: ' + PORT);
}); 
}).catch((error)=>{
        console.log(error);
})


//------------------Notas-------------------------------------------

// response.end() es la que envía la respuesta al cliente.
// método JSON.stringify() para convertir el objeto a una cadena JSON.
        // for (let i = 0; i < data.length; i++) {
        //     if (data[i].id === id) {
        //         let character = data[i]; 
        //         console.log(character);
        //         response.end(JSON.stringify(character));
        //     }
        //
        // }
        // 
        
        //if (request.url === '/rickandmorty/character') {
        //     const id = parseInt(request.url.split('/').pop());
        //     console.log(id);
        //     const characterFound = data.find((character)=>{character.id === id})
        //     response
        //     .writeHead(200,{'Content-type':'application/json'})
        //     .end(JSON.stringify(characterFound));
        
// const http = require('http');
// const { getCharById } = require('./controllers/getCharById');
// const port = 3001;

// http.createServer((request,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     if (request.url.includes("/rickandmorty/character")) {
//         const id = parseInt(request.url.split('/').pop());
//         getCharById(res,id)
//     }else{
//         throw Error('Character id not found')
//     }
// }).listen(port,'localhost')