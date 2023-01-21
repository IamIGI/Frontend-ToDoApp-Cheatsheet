import './NavBar.css';

const NavBar = () => {
    return (
        <div className="app__navbar">
            <div className="app__navbar__pageTitle">
                <h1>Lista</h1>
            </div>
            <div>
                <button className="app__navbar__button">
                    <h2>Dodaj do listy</h2>
                </button>
            </div>
        </div>
    );
};

export default NavBar;
