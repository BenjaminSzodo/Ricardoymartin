import { ADD_FAV,REMOVE_FAV,ORDER,FILTER} from "./actionstype"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, action) => {
switch (action.type) {
    case  ADD_FAV:
        return{
            ...state,
            myFavorites: [...state.myFavorites , action.payload],
            allCharacters: [...state.myFavorites , action.payload],
        }
    case REMOVE_FAV:
        const removecharr = state.myFavorites.filter(charracters => charracters.id !== action.payload)
        return{
            ...state,
            myFavorites: removecharr,
        }

    default:
        return {...state}
}
}
export default reducer;