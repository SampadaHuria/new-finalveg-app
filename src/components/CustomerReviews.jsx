// CustomerReviews.jsx

import React, { useState } from 'react';
import './CustomerReviews.css';
import shashwat from '../images/shashwat.jpeg'
import dravyanshu from '../images/raj.jpeg'
import aman from '../images/aman.jpeg'
import adarsh from '../images/adarsh.jpeg'
import nikhil from '../images/nikhil.jpeg'
import sharad from '../images/sharad.jpeg'

const reviewsData = [
  {
    id: 1,
    name: 'Shashwat Mishra',
    image: shashwat,
    review: ' I love how accurate the predictions are, helping me plan my meals and grocery trips more efficiently. It has saved me money and reduced food waste by allowing me to buy vegetables at the right times. Highly recommended!',
  },
  {
    id: 2,
    name: 'Dravyanshu Singh',
    image: dravyanshu,
    review: 'As a small-scale farmer, this app has been a game-changer for me. I can now anticipate market trends and adjust my planting schedules accordingly. The historical price data and the AI-powered predictions are incredibly insightful.',
  },
  {
    id: 3,
    name: 'Aman Dwivedi',
    image: aman,
    review: 'I am terrible at keeping up with changing vegetable prices, but this app has made it a breeze. I appreciate the user-friendly design and the way it presents information graphically. Its like having a personal vegetable price expert in my pocket!.',
  },
  {
    id: 4,
    name: 'Adarsh Sinha',
    image: adarsh,
    review: 'The Vegetable Rate Prediction app seemed promising, but it fell short of my expectations. The predictions were often inaccurate, leading me to make poor buying decisions. If the apps AI can be improved to provide more reliable forecasts, I would consider using it again..',
  },
  {
    id: 5,
    name: 'Nikhil Soni',
    image: nikhil,
    review: 'I am impressed by the real-time updates on vegetable prices in my local area. It has helped me plan my weekly grocery budget more effectively. The apps notifications are handy, and I no longer have to guess whether I am getting a good deal or not.',
  },
  {
    id: 6,
    name: 'Sharad Gumber',
    image: sharad,
    review: 'The Vegetable Rate Prediction app is a neat concept, but I found the predictions to be hit or miss. While it has been helpful a few times, I cant always rely on it for accurate pricing information. It has potential, but the accuracy needs to improve.',
  },
 
];
const CustomerReviews = () => {
    const itemsPerPage = 3; // Number of reviews per page
    const [currentPage, setCurrentPage] = useState(1);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const totalPages = Math.ceil(reviewsData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentReviews = reviewsData.slice(startIndex, endIndex);
  
    return (
      <div className="customer-reviews">
        <h1>Testimony</h1>
        <h2>Our Satisfied Customers Say</h2>
        {currentReviews.map((review) => (
          <div className="review" key={review.id}>
            <img src={review.image} alt={review.name} />
            <h4>{review.name}</h4>
            <p>{review.review}</p>
          </div>
        ))}
        <div className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };
  

export default CustomerReviews;
