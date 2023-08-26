// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import VegetablesGallery from './components/VegetablesGallery';
// import ProductsPage from './components/ProductsPage';
// import DealOfTheDay from './components/DealOfTheDay';
// import CustomerReviews from './components/CustomerReviews';
// import NewsletterSubscription from './components/NewsletterSubscription';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import { Switch as RouterSwitch } from 'react-router-dom';
import Login from './pages/Login';
// import Home from './pages/Homes';
import Homes from './pages/Homes';
import Cart from './pages/Cart';
import Register from './pages/Register';
import ContactPage from './pages/ContactPage';
import Logins from './Logins';


function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
     <Route index element={<Homes />} />
     <Route path= "/homes" element={<Homes />} />
     <Route path= "/login" element={<Login />} />
     <Route path= "/products" element={<Products />} />
     <Route path= "/cart" element={<Cart />} />
     <Route path= "/register" element={<Register />} />
     <Route path= "/contact" element={<ContactPage />} />
      </Routes>
      </BrowserRouter>
    {/* <Logins /> */}
    
   
    </div>
     
      
  );
}

export default App;
