import React, { useState } from "react";
import { data } from "../restApi.json";//The links are dynamically generated from the data array, which is imported from ../restApi.json
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";//Responsive Design: Ensure that the .hamburger menu and .navLinks styling are set up for responsiveness, especially for mobile views.
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">Tasfia</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (//data[0].navbarLinks is large or changes frequently to avoid unnecessary re-renders.
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;