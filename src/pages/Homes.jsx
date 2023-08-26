import React from "react";
import Home from '../components/Home';
import VegetablesGallery from '../components/VegetablesGallery';
import ProductsPage from '../components/ProductsPage';
import DealOfTheDay from '../components/DealOfTheDay';
import CustomerReviews from '../components/CustomerReviews';
// import NewsletterSubscription from '../components/NewsletterSubscription';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";

// import { useHistory } from "react-router-dom";

const Homes = () => { 
  return (
    <div >
    <Announcement /> 
<Navbar />
<Home />
<VegetablesGallery />
<ProductsPage />
<DealOfTheDay />
<CustomerReviews />
{/* <NewsletterSubscription /> */}
<Newsletter />
<Footer />
    </div>
  );
};

export default Homes;
