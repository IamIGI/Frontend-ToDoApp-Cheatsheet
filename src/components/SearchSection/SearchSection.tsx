import { BsSearch } from 'react-icons/bs';
import './SearchSection.css';

const SearchSection = () => {
    return (
        <div className="searchSection">
            <div className="searchSection__relative">
                <input className="searchSection__searchField" />
                <div className="searchSection__button">
                    <div>
                        <BsSearch />
                    </div>
                </div>
                <div className="searchSection__searchDescription">Wyszukiwanie</div>
            </div>
        </div>
    );
};

export default SearchSection;
