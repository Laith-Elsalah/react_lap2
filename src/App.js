import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import movies from './movies';

function App() {
  return (
    <>
    <Header />
    <Router>
    <Routes>
      <Route path ="/" Component={Main}> </Route>
      <Route path ="/movies" Component={movies}> </Route>
    </Routes>
    
    </Router>


   </>
  )
}

export default App;
