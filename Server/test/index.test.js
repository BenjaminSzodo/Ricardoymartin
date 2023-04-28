const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
const URL = "/rickandmorty/character/"

const character = {
    id: 996,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
       name: 'Earth (C-137)',
       url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
}
describe('Test de RUTAS', () => {
    describe("GET /rickandmorty/character/:id",()=>{
        it('Responde con status: 200', async() => {
            await agent.get('/rickandmorty/character/1').expect(200)
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image',async()=>{
            const response = await agent.get(`${URL}1`)
            // expect(response.body).toHaveProperty("id", "name", "species", "gender", "status", "origin" , "image")
            const props = ["id", "name", "species", "gender", "status", "origin" , "image"]
            props.forEach(prop => {
                expect(response.body).toHaveProperty(prop)
            });
        })
        it("Si hay un error responde con status: 500", async () => {
            const response = await agent.get('/rickandmorty/character/999')
            expect(response.body).toBe(500)
        })
    })
    describe('GET /rickandmorty/login',()=>{
        const access = {access:true}
        it('Si la info del login es correcta devolver true',async()=>{
        const response = await agent.get('/rickandmorty/login/?email=juansete@gmail.com&password=malardo')
        expect(response.body).toEqual(access)
        })
        it('Si la info del login es correcta devolver false',async()=>{
            const response = await agent.get('/rickandmorty/login/?email=juansete@gmail.com&password=malardo')
            access.access = false;
            expect(response.body).toEqual(access)
        })
    })
    describe('POST /rickandmorty/fav',()=>{
        it('Debe guardar el personaje en favoritos ',async()=>{
            const response = await agent.post('/rickandmorty/fav').send(character)
            expect(response.body).toContainEqual(character)
        })
        it('Debe agregar el personaje a favoritos sin borrar los existentes',async()=>{
            character.id = 997
            character.name = 'Pepe'
            const response = await agent.post('/rickandmorty/fav').send(character)
            expect(response.body.length).toBe(2)
        })
    })
})