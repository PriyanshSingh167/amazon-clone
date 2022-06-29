import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="Chainsaw Man by Tatsuki Fujimoto (Vol.1)"
            price="396"
            rating="⭐⭐⭐⭐"
            image="https://i.pinimg.com/474x/2c/88/f1/2c88f165b1509f5c8f2d61d6db142901.jpg"
          />
          <Product
            title="Kimi wa Houkago Insomnia by Makoto Ojiro (Vol.8)"
            price="450"
            rating="⭐⭐⭐⭐⭐"
            image="https://i.redd.it/u3hl8mwt35781.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="Apple iPhone 13 Pro Max (128GB) - Sierra Blue"
            price="1,26,900"
            rating="⭐⭐⭐⭐"
            image="https://i.pinimg.com/474x/48/50/67/485067d9570ba3f9a3cfd9c80dd38924.jpg"
          />
          <Product
            title="2021 Apple iMac with 4.5K Retina Display - Blue "
            price="1,56,700"
            rating="⭐⭐⭐⭐⭐"
            image="https://i.pinimg.com/474x/51/7d/93/517d938e3adb602d8e41f93206dfd2bd.jpg"
          />
          <Product
            title="Samsung Galaxy M21 2021 Edition - Charcol Black"
            price="11,499"
            rating="⭐⭐⭐"
            image="https://i.pinimg.com/474x/9c/2f/0e/9c2f0eb17665f50efcd2b644d2a864d8.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
