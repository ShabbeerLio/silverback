import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Disclaimer from './Pages/Disclaimer/Disclaimer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home title={"Silver Back"}/>} />
          <Route path="/disclaimer" exact element={<Disclaimer title={"Silver Back"}/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;
