import trophy from "/trophy-cutout.png";

export function Trophy() {
  return (
    <>
      <section className="trophy">
        <div className="container">
          <img
            src={trophy}
            alt="The LIPAFC Barrel Trophy"
            height="1268"
            width="460"
            className="trophy-cutout"
          />
          <div>
            <h1>The Trophy, est. 2022</h1>
            <p>
              Every distinguished competition requires a trophy of elegance,
              sophistication, and equal importance. That's why the Louisville
              Coopers and the Brickyard Battalion keep the ultimate trophy in
              the soccer landscape - the LIPAFC Barrel Trophy<sup>&trade;</sup>
              <sup>&reg;</sup>
            </p>
            <div className="trophy__rules">
              <ul>
                <li>
                  The Barrel is awarded to the season's series winner. This
                  means that The Barrel <strong>does not</strong> change hands
                  mid-season.{" "}
                </li>
                <li>
                  In the event that the season series is split, the current
                  holders retain possession of The Barrel.
                </li>
                <li>
                  If the teams meet in the playoffs and the series is tied, the
                  playoff game decides the winner of The Barrel.
                </li>
                <li>
                  Each season, the winner is marked with a blue or purple
                  carabiner that hands from the top of The Barrel.
                </li>
                <li>
                  The modern-day Barrel was created in 2022. However, an older
                  version was rumored to have been a barrel built from the very
                  same wood as the fabled Trojan Horse.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
