import IndyElevenLogo from "/logos/indy_eleven_logo.svg";
import LouCityLogo from "/logos/louisvillecity_2020_logo.webp";

export function LatestResults() {
  return (
    <>
      <section id="latest-results" className="latest-results">
        <span>
          Latest Results:{" "}
          <a
            href="https://www.youtube.com/watch?v=SKayQN6WdrI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oct 5<sup>th</sup> 2024
          </a>
        </span>
        <div className="latest-results__result">
          <span className="latest-results__score">2</span>
          <div className="latest-results__team">
            <img
              src={IndyElevenLogo}
              alt="Indianapolis 11 Logo"
              className="latest-results__logo"
              width="75px"
              height="104px"
            />
            <span>INDY</span>
          </div>
        </div>
        <div className="latest-results__result">
          <span className="latest-results__score">2</span>
          <div className="latest-results__team">
            <img
              src={LouCityLogo}
              alt="Louisville City Logo"
              className="latest-results__logo"
              width="75px"
              height="100px"
            />
            <span>LOU</span>
          </div>
        </div>

        <span title="ticket link">
          {/*<a href="https://seatgeek.com/louisville-city-fc-tickets/united-soccer-league/2024-04-06-2-pm/6286554" rel="noopener nofollow" target="_blank">-->Next Match: October 5<sup>th</sup> 2024<!--</a>-->*/}
          Next Match: TBD
        </span>
      </section>
    </>
  );
}
