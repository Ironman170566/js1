import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/06/best-movies-prime-video-feature.jpg?q=50&fit=contain&w=943&h=&dpr=1.5"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image="https://pictures.abebooks.com/isbn/9780307887894-us-300.jpg"
            rating={3}
          />
          <Product
            id="12321341"
            title="Xbox Series X"
            price={499.99}
            image="https://m.media-amazon.com/images/I/61JGKhqxHxL._SL1500_.jpg"
            rating={5}
          />
          {/* 2 */}
        </div>
        <div className="home__row">
          {" "}
          <Product
            id="49538094"
            title="Apple Watch Series 8 [GPS 41mm] Smart Watch w/ (Product) RED Aluminum Case with (Product) RED Sport Band - S/M. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant
            "
            price={399.99}
            image="https://m.media-amazon.com/images/I/71DfMwITnaL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="4903850"
            title="SAMSUNG Galaxy S22+ Cell Phone, Factory Unlocked Android Smartphone, 256GB, 8K Camera & Video, Brightest Display Screen, Long Battery Life, Fast 4nm Processor, US Version, Green"
            price={1049.99}
            image="https://m.media-amazon.com/images/I/71GFJM41gKL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="PlayStation PS5 Console - God of War Ragnarök Bundle"
            price={559.99}
            image="https://m.media-amazon.com/images/I/71zCErCYVXL._SL1500_.jpg"
            rating={5}
          />
          {/* 3 */}
        </div>
        <div className="home__row">
          <Product
            id="23445930"
            title="Apple 2021 MacBook Pro (14-inch, M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD) - Space Gray"
            price={2199.99}
            image="https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SL1500_.jpg"
            rating={5}
          />
          {/* 1 */}
        </div>
      </div>
    </div>
  );
}

export default Home;
