
import Cards from '../Cards/Cards';
import { connect } from 'react-redux';


const Favorites = ({myFavorites, onClose}) =>{

    return(
        <div>

            <Cards characters={myFavorites} onClose={onClose}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
       myFavorites: state.myFavorites
    }
 }
 
 export default connect(
    mapStateToProps, //permite acceder al estado global
    null //permite despachar acciones
 ) (Favorites);
