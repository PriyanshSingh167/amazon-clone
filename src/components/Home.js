import React from "react";
import "../styles/Home.css";
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
            key={12321341}
            id="12321341"
            title="Chainsaw Man by Tatsuki Fujimoto (Vol.1)"
            price={396}
            rating={4}
            image="https://i.pinimg.com/474x/2c/88/f1/2c88f165b1509f5c8f2d61d6db142901.jpg"
          />
          <Product
            key={49538094}
            id="49538094"
            title="Kimi wa Houkago Insomnia by Makoto Ojiro (Vol.8)"
            price={450}
            rating={5}
            image="https://i.redd.it/u3hl8mwt35781.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            key={4903850}
            id="4903850"
            title="Apple iPhone 13 Pro Max (128GB) - Sierra Blue"
            price={126900}
            rating={4}
            image="https://i.pinimg.com/474x/48/50/67/485067d9570ba3f9a3cfd9c80dd38924.jpg"
          />
          <Product
            key={23445930}
            id="23445930"
            title="2021 Apple iMac with 4.5K Retina Display - Blue "
            price={156700}
            rating={3}
            image="https://i.pinimg.com/474x/51/7d/93/517d938e3adb602d8e41f93206dfd2bd.jpg"
          />
          <Product
            key={3254354345}
            id="3254354345"
            title="Samsung Galaxy M21 2021 Edition - Charcol Black"
            price={11499}
            rating={2}
            image="https://i.pinimg.com/474x/9c/2f/0e/9c2f0eb17665f50efcd2b644d2a864d8.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            key={90829332}
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={109498}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkx0YgVNoB_-luH5LDTmddttrz6noZ9HnM1w&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
