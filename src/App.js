
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Multiple from './components/Multliple/Multiple';
import SecondHeader from './components/SecondHeader/SecondHeader';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<>
              <Header />
              <SecondHeader />
             <Main />
          </>} />
        <Route path='/multi' element={<Multiple />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
