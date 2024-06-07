
import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/store';
import AppRouter from './router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
