import './App.css';
import Menubar from './Components/MenuBar';
import Toolbox from './Components/Toolbox';
import Board from './Components/Board';
import { Provider } from 'react-redux';
import { store } from './store';
function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <Menubar />
        <Toolbox />
        <Board />
      </div>
    </Provider>

  );
}

export default App;
