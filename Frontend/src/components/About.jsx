import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
const About = () => {
  return (
    <>
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>Food is Love</p>
                </div>
                <p className="mid">
                we pride ourselves on crafting an unforgettable culinary experience that delights the senses. Our menu features a diverse selection of dishes, each thoughtfully prepared with the finest ingredients and a passion for flavor. From farm-fresh salads and succulent seafood to expertly grilled steaks and decadent desserts, our offerings cater to a variety of tastes and dietary preferences. Whether you're celebrating a special occasion or simply enjoying a night out, our attentive staff and inviting ambiance ensure a memorable dining experience. Join us for a meal that promises not just to satisfy, but to indulge and inspire.
                    </p>
                    <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight/>
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
      </>
        );
        };

export default About