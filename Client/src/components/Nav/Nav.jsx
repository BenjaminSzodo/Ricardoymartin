import SearchBar from '../Searchbar/SearchBar';
import {NavLink} from 'react-router-dom';

export default function Nav({onSearch,logout}) {
    return (
        <div>
            <button>
                <NavLink to='/about'> About </NavLink>
            </button>
            <button>
                <NavLink to= '/home'>Home</NavLink>
            </button>
            <button onClick={logout}>
                LogOut
            </button>
            <button>
                <NavLink to = '/favorites'>Favorites</NavLink>
            </button>
            < SearchBar onSearch={(onSearch)} />
        </div>
        
    );
}
