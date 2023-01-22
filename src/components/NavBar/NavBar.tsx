import Modal from 'components/Modal/Modal';
import PopUpWindow from 'components/PopUpWindow/PopUpWindow';
import { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function onClose() {
        setIsOpen(false);
    }

    return (
        <>
            <div className="app__navbar">
                <div className="app__navbar__pageTitle">
                    <h1>Lista</h1>
                </div>
                <div>
                    <button className="app__navbar__button" onClick={() => setIsOpen(true)}>
                        <h2>Dodaj do listy</h2>
                    </button>
                </div>
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <PopUpWindow createItem={true} onClose={onClose} />
            </Modal>
        </>
    );
};

export default NavBar;
