let myFavorites = [];

const postFav = (req,res) => {
    const favoriteChar = req.body;
    const characterFound = myFavorites.find(fav => fav.id === favoriteChar.id)

    if (!characterFound){
        myFavorites.push(favoriteChar);
        return res.status(200).json(myFavorites);
    }

    return res.status(404).send('Ya esta este personaje en Favoritos')
    }

const deleteFav = (req,res) => {
    const {id} = req.params;
    myFavorites = myFavorites.filter(fav => fav.id !== +id)
    return res.status(200).json(myFavorites);
}

module.exports = {postFav , deleteFav}