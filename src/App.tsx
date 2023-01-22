import { NavBar, MainSection } from './components';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import './App.css';

function App() {
    return (
        <div className="app">
            <Provider store={store}>
                <NavBar />
                <MainSection />
            </Provider>
        </div>
    );
}

export default App;
