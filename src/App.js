import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
// import Menu from './pages/Menu';
// import Contact from './pages/Contact';
import About from './pages/AboutUs';
// import Footer from './pages/Footer';


const App = () => {
  useEffect(() => {

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleScroll() {
      const aboutSection = document.querySelector('.about-section');
      const chooseUsSection = document.querySelector('.chooseUs');
      const dishes = document.querySelectorAll('.dishes .box');
      const ingredients = document.querySelector('.ingredients');
      const discover = document.querySelector('.discover');
      const review = document.querySelector('.review');
      const reviewContains = document.querySelectorAll('.review-contain');
      const galleryTxt = document.querySelector('.gallery-txt');
      const gallery = document.querySelector('.gallery');
      const contactUsContainer = document.querySelector('.contactUs-container');

      if (aboutSection && isElementInViewport(aboutSection)) {
        aboutSection.classList.add('show');
      }

      if (chooseUsSection && isElementInViewport(chooseUsSection)) {
        chooseUsSection.classList.add('show');
      }

      dishes.forEach((dish, index) => {
        if (isElementInViewport(dish)) {
          setTimeout(() => {
              dish.classList.add('show');
          }, index * 300); 
        }
      });

      if (ingredients && isElementInViewport(ingredients)) {
        ingredients.querySelector('h2').classList.add('show');
        ingredients.querySelector('p').classList.add('show');
      }

      if (discover && isElementInViewport(discover)) {
        discover.querySelector('h2').classList.add('show');
        discover.querySelector('p').classList.add('show');
        document.querySelector('.inge-img').classList.add('rotate');
      }

      if (review && isElementInViewport(review)) {
        review.querySelector('h2').classList.add('show');
        document.querySelector('.join-us').classList.add('show');
      }

      reviewContains.forEach((contain, index) => {
        if (isElementInViewport(contain)) {
          setTimeout(() => {
            contain.classList.add('show');
          }, index * 300); 
        }
      });
      

      if (galleryTxt && isElementInViewport(galleryTxt)) {
        galleryTxt.classList.add('slide-left');
      }

      if (gallery && isElementInViewport(gallery)) {
        gallery.classList.add('slide-right');
      }

      if (contactUsContainer && isElementInViewport(contactUsContainer)) {
        document.querySelector('.border3').classList.add('rotate');
        document.querySelector('.input-section').classList.add('slide-left');
        document.querySelector('.contact').classList.add('slide-right');
      }
    }

    

   
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

export default App;
