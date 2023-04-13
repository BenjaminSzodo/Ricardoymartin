import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState,useEffect } from "react";



const Card =({name,status,species,gender,origin,image,id,onClose,addFav,myFavorites,dispatch
  }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites,id]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({name,species,gender,image,origin,id,onClose});
    }
  }
  return (
    <div className="card" key={id}>
      <Link to={`/detail/${id}`}>
        <h3 className="card-name">{name}</h3>
      </Link>
      <button onClick={() => onClose(id)}>X</button>
      <h2>{name}</h2>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin.name}</h2>
      <img src={image} alt={name} />
      <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' } </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(
  mapStateToProps, //permite acceder al estado global
  mapDispatchToProps //permite despachar acciones
)(Card);