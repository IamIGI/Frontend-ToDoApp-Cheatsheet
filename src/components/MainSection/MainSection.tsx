import SearchSection from 'components/SearchSection/SearchSection';
import ToDoList from 'components/ToDoList/ToDoList';
import './MainSection.css';

const MainSection = () => {
    return (
        <div className="app__mainSection">
            <SearchSection />
            <ToDoList />
        </div>
    );
};

export default MainSection;
