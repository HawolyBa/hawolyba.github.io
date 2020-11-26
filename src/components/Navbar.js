import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll'
import logo from '../images/logo.png'

const Navbar = () => {
  // useEffect(() => {
  //   document.addEventListener("scroll", stickyNav);
  //   return () => {
  //     document.removeEventListener("scroll", stickyNav)
  //   };
  // }, []);

  // const stickyNav = () => {
  //   const nav = document.querySelector("#main-navbar");
  //   if (document.documentElement.scrollTop > 1) {
  //     nav.classList.add("sticky");
  //   } else {
  //     nav.classList.remove("sticky");
  //   }
  // };

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <header className={`main-header ${show && "header-black"}`}>
      <div className="inner-header">
        <img src={logo} alt="logo"/>
        <nav id="main-navbar">
          <ul>
            <li>
              <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={50} duration={500} >
                Portfolio
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="competences" spy={true} smooth={true} offset={50} duration={500}>
                Compétences
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                À propos
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
