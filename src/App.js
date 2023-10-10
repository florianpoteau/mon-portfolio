
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarPortfolio from './Components/Navbar/Navbar';
import QuiSuisJe from './Pages/QuiSuisJe';
import Cv from './Pages/Cv';
import Competences from './Pages/Competences';


function App() {

  return <>
    <NavbarPortfolio/>
  <BrowserRouter>

    <Routes>
      <Route element={
        <QuiSuisJe />
      } path={"/"} />
      <Route element={
        <Cv />
      } path={"/Cv"} />
      <Route element={
        <Competences />
      } path={"/competences"} />
    </Routes>

          
  </BrowserRouter>
  </>
  
}

export default App;
