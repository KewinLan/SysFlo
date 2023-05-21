import './App.scss';
import About from './components/About';
import Custom from './components/Custom';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

function App() {
  return (
    <>
      <Header></Header>
      <Footer></Footer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;
//npm i react-router-dom
//npm install react-icons
//npm install firebase
//The images should be 332 by 245 px. Divide the number by 0.7225

//Colors:  brown #8C422D  purple #420B3B  white #FFFCF5  orange #FF8B2C