import './header.css';
import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
    return(
        <div className="nav">
            <div className="headerContainer">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1150px-IMDB_Logo_2016.svg.png?20200406194337" alt="" />
            <SearchBar />
            </div>
        </div>
    )
}