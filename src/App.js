import './App.scss';
import FAQ from './components/FAQ';
import ForBusinesses from './components/ForBusinesses';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';
import Header from './components/Header';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/forbusinesses" element={<ForBusinesses />} />
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
// /The images should be 332 by 245 px. Divide the number by 0.7225

//Colors:  white #fff  dark-blue #182030  darkish-blue #213F42  light-blue #75CDD9  gray-blue 9AB1AB