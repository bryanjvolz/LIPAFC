import LipaCup from '/logos/lipafc_cup.svg';

export function Header() {
  return (
    <>
    <header>
      <nav className="main-nav" aria-label="main navigation">
        <a href="#main-content" id="skip" className="skip-link" tabIndex={0}>Skip Content</a>

        <a href="#intro" aria-label="LIPAFC.com Home" className="mobile-logo" tabIndex={0}><img src={LipaCup} alt="LIPAFC Cup Icon" height="41px" width="38px" /></a>

        <div className="menu-toggle" aria-label="Mobile Navigation Toggle" tabIndex={0}></div>

        <ul>
          <li><a href="#intro" aria-label="LIPAFC.com Home" tabIndex={0}><img src={LipaCup} alt="LIPAFC Cup Icon"  height="68px" width="75px" /></a></li>
          <li><a href="#latest-results" tabIndex={0}>Latest Results</a></li>
          <li><a href="#about-lipafc" tabIndex={0}>LIPAFC Info</a></li>
          <li><a href="#results" tabIndex={0}>Results</a></li>
          <li><a href="#featured-matchups" tabIndex={0}>Looking Back</a></li>
        </ul>
      </nav>

        <section className="intro wrap">
            <div className="container">
                <h1><span>The</span> Louisville-Indianapolis Proximity Association Football Contest</h1>
                <p><span className="hidden">'Lee-pah-eff-see' -</span> THE SINGLE MOST IMPORTANT SPORTING AND CULTURAL EVENT IN HUMAN HISTORY</p>
            </div>
          </section>
      </header>
    </>
  );
}