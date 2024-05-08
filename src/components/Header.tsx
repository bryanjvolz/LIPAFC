import { useState } from "react";
import LipaCup from "/logos/lipafc_cup.svg";

export function Header() {
  const [navActive, setNavActive] = useState(false);

  function mobileNav() {
    if (!navActive && window.innerWidth <= 768) {
      setNavActive(true);
      document.body.classList.add("active-mobile-nav");
    } else {
      deactivateNav();
    }

    window.addEventListener("resize", resizeNav);

    function resizeNav() {
      if (window.innerWidth >= 768) {
        deactivateNav();
      }
    }

    function deactivateNav() {
      setNavActive(false);
      document.body.classList.remove("active-mobile-nav");
      window.removeEventListener("resize", resizeNav);
    }
  }

  return (
    <>
      <header>
        <nav
          className={`main-nav ${navActive ? "active-mobile-nav" : "inactive-mobile-nav"}`}
          aria-label="main navigation"
        >
          <a href="#main-content" id="skip" className="skip-link" tabIndex={0}>
            Skip Content
          </a>

          <a
            href="#intro"
            aria-label="LIPAFC.com Home"
            className="mobile-logo"
            tabIndex={0}
          >
            <img
              src={LipaCup}
              alt="LIPAFC Cup Icon"
              height="41px"
              width="38px"
            />
          </a>

          <div
            className={`menu-toggle ${navActive && "animate"}`}
            aria-label="Mobile Navigation Toggle"
            tabIndex={0}
            onClick={mobileNav}
          ></div>

          <ul className={navActive ? "active-nav" : ""}>
            <li>
              <a href="#intro" aria-label="LIPAFC.com Home" tabIndex={0}>
                <img
                  src={LipaCup}
                  alt="LIPAFC Cup Icon"
                  height="68px"
                  width="75px"
                />
              </a>
            </li>
            <li>
              <a href="#latest-results" tabIndex={0}>
                Latest Results
              </a>
            </li>
            <li>
              <a href="#about-lipafc" tabIndex={0}>
                LIPAFC Info
              </a>
            </li>
            <li>
              <a href="#results" tabIndex={0}>
                Results
              </a>
            </li>
            <li>
              <a href="#featured-matchups" tabIndex={0}>
                Looking Back
              </a>
            </li>
          </ul>
        </nav>

        <section className="intro wrap">
          <div className="container">
            <h1>
              <span>The</span> Louisville-Indianapolis Proximity Association
              Football Contest
            </h1>
            <p>
              <span className="hidden">'Lee-pah-eff-see' -</span> THE SINGLE
              MOST IMPORTANT SPORTING AND CULTURAL EVENT IN HUMAN HISTORY
            </p>
          </div>
        </section>
      </header>
    </>
  );
}
