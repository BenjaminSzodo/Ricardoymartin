import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Routes , Route, useLocation , useNavigate } from 'react-router-dom'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
const URL = 'http://localhost:3001/rickandmorty/login';



function App() {
   const home = !(useLocation().pathname === '/');
   const [characters,setCharacters] = useState([]); 
   const [access,setAccess] = useState(false);
   const navigate = useNavigate();


   const login = async(userData) => {
            try {
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         console.log(error.message);
      }
   }

   
   function logout() {
      const confirmed = window.confirm("você quer fechar a sessão?");
      if (confirmed) {
        setAccess(false);
        navigate('/');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);


   const onSearch = async(id) => {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      } catch(error) {
         alert('¡No hay personajes con este ID!');
      }
   };
   
   

   const onClose = (id) =>{
      const charactersFiltered = characters.filter(characters => characters.id !== id)
      setCharacters (charactersFiltered)
   }

   return (
      <div className='App'>
          {home && <Nav onSearch = {onSearch} logout={logout}/>}
         <Routes> 
            <Route path= "/" element = {<Form login = {login}/>} />
            <Route path= "/home" element= {<Cards characters={characters} onClose={onClose} />}/>
            <Route path= "/about" element= {<About/>}/>
            <Route path= "/detail/:id" element= {<Detail/>}/>
            <Route path= "/favorites" element= {<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;

// const email = 'juansete@gmail.com';
   // const password = 'malardo';
   // const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '8b6bd1748044.3c7b319f29bbb0922084';