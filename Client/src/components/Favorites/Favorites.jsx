
import { useState } from 'react';
import { filterCards, orderCards } from '../../redux/actions';
import Cards from '../Cards/Cards';
import { connect, useDispatch } from 'react-redux';


const Favorites = ({myFavorites, onClose}) =>{
const dispatch = useDispatch();
const [aux,setAux] = useState(false);

const handleOrder = (event) =>{
    dispatch(orderCards(event.target.value));
    setAux(aux);
}
const handleFilter = (event)=> {
    dispatch(filterCards(event.target.value));
}
    return(
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>

            <Cards characters={myFavorites} onClose={onClose}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
    myFavorites: state.myFavorites
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeFav: (id)=>{dispatch(removeFav)}
//     }
// }
export default connect(
    mapStateToProps, //permite acceder al estado global
    null, //permite despachar acciones
) (Favorites);
