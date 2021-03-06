import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img
            className="home__img"
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             alt="BG_Image" />
             
        <div className="home__row">
        <Product
        id="121231431"
        title="Subtle Art Of Not Giving a F*ck"
        price={245}
        rating={4}
        image="data:image/webp;base64,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"
        />  
        <Product 
        id="414141241"
        title="Mechanics I for JEE (Advanced), 3E Paperback"
        price={1000}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/51PQayW9A0L._SX385_BO1,204,203,200_.jpg"
        />
        </div>
        <div className="home__row">
        <Product 
        id="414141241"
        title="Samsung M31S"
        price={40000}
        rating={5}
        image="https://m.media-amazon.com/images/I/61d-phh4GfL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product 
        id="414141240"
        title="Iphone 11 Pro"
        price={10}
        rating={1}
        image="https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product 
        id="414141241"
        title="Zebronics Mouse"
        price={1000}
        rating={3}
        image="https://images-eu.ssl-images-amazon.com/images/I/71BTnDBLN3L._AC_UL220_SR180,220_.jpg"
        />

        </div>
        </div>
        </div>
    )
}

export default Home ;
