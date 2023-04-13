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
            myFavorites: [...state.allCharacters , action.payload],
            allCharacters: [...state.allCharacters , action.payload],
        }
    case REMOVE_FAV:
        const removecharr = state.myFavorites.filter(characters => characters.id !== action.payload)
        return{
            ...state,
            myFavorites: removecharr,
        }
    case FILTER:
        const allCharacrersFiltered = state.allCharacters.filter(character => character.gender === action.payload)
        return {
            ...state,
            myFavorites: action.payload ==='allCharacters'
            ? [...state.allCharacters]
            : allCharacrersFiltered
        }
    case ORDER:
        const allCharactersCopy = [...state.allCharacters]
        return {
            ...state,
            myFavorites: action.payload === 'A' ? allCharactersCopy.sort((a,b)=> a.id - b.id) : allCharactersCopy.sort((a,b)=> a.id - b.id)
            
        }
    default:
        return {...state}
}
}
export default reducer;