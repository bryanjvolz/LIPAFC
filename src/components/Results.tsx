



export function Results(){
  return (
    <>
    <section id="results" className="results">
      <div className="container">
        <h1>LIPAFC Match History</h1>

        <h2>Stat Breakdowns</h2>
        <table className="all-time all-time--regular">
          <caption>All Time Regular Season Records</caption>
          <thead>
            <tr>
              <td title="Indianapolis Overall">Indy Overall (W-L-D)</td>
              <td title="Louisville Overall">Lou Overall (W-L-D)</td>
              <td title="Indianapolis Home">Indy Home</td>
              <td>Lou Home</td>
              <td>Indy Away</td>
              <td>Lou Away</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-name="Indy Overall">3-6-5</td>
              <td data-name="Lou Overall">6-3-5</td>
              <td data-name="Indy Home">2-3-1</td>
              <td data-name="Lou Home">3-1-4</td>
              <td data-name="Indy Away">1-3-4</td>
              <td data-name="Lou Away">3-2-1</td>
            </tr>
          </tbody>
        </table>

        <table className="all-time all-time--playoffs">
          <caption>All Time USL-C Playoffs Records</caption>
          <thead>
            <tr>
              <td>Indy Overall (W-L-D)</td>
              <td>Lou Overall (W-L-D)</td>
              <td>Lou Extra Time</td>
              <td>Indy Extra Time</td>
              <td>Lou PKs</td>
              <td>Indy PKs</td>
              <td>Last Meeting</td>
              <td>Round</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-name="Indy Overall">0-0-1</td>
              <td data-name="Lou Overall">1-0-0</td>
              <td data-name="Lou X-Time">1-0-0</td>
              <td data-name="Indy X-Time">0-0-1</td>
              <td data-name="Lou PKs">0-0-0</td>
              <td data-name="Indy PKs">0-0-0</td>
              <td data-name="Last Match">2019</td>
              <td data-name="Round">Eastern Conference Final</td>
            </tr>
          </tbody>
        </table>

        <table className="all-time all-time--open-cup">
          <caption>All Time US Open Cup Records</caption>
          <thead>
            <tr>
              <td>Indy Overall (W-L-D)</td>
              <td>Lou Overall (W-L-D)</td>
              <td>Indy Home</td>
              <td>Lou Home</td>
              <td>Indy Away</td>
              <td>Lou Away</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-name="Indy Overall">1-1-0</td>
              <td data-name="Lou Overall">1-1-0</td>
              <td data-name="Indy Home">1-0-0</td>
              <td data-name="Lou Home">1-0-0</td>
              <td data-name="Indy Away">0-1-0</td>
              <td data-name="Lou Away">0-1-0</td>
            </tr>
          </tbody>
        </table>

        <hr />
          <h2>Match Info</h2>
          <nav aria-label="Match history navigation">
            <label htmlFor="year-select" name="year-select" className="year-select-label">Select Year</label>
            <select id="year-select" className="year-select" aria-controls="match-results">
              <optgroup label="Modern Era">
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
              </optgroup>
              <optgroup label="Classical Era">
                <option value="1945">1945</option>
                <option value="1942">1942</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1932">1932</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1921">1921</option>
                <option value="1918">1918</option>
                <option value="1878">1878</option>
                <option value="1865">1865</option>
                <option value="ancient">Ancient History</option>
              </optgroup>
            </select>
          </nav>
          <table id="match-results" className="match-results" aria-live="polite">
            <caption className="visuallyhidden">LIPAFC Match Results</caption>
            <thead>
              <tr>
                <th>Date</th>
                <th>Score</th>
                <th>Winner</th>
                <th>Location</th>
                <th>Competition</th>
              </tr>
            </thead>
            <tbody>
              <tr data-year="2024">
                <td>April 6<sup>th</sup>, 2024</td>
                <td>5-3</td>
                <td>Louisville</td>
                <td>Lynn Family Stadium</td>
                <td>USL-C Regular Season</td>
              </tr>
              <tr data-year="2024">
                  <td>October 5<sup>th</sup>, 2024</td>
                  <td>TBD</td>
                  <td>TBD</td>
                  <td>Carroll Stadium</td>
                  <td>USL-C Regular Season</td>
              </tr>
              <tr data-year="2023">
                  <td><a href="https://www.youtube.com/watch?v=NKv1cEhkfZM&t=10s" target="_blank" rel="noopener noreferrer">May 27, 2023</a></td>
                  <td>0-1</td>
                  <td>Louisville</td>
                  <td>Carroll Stadium</td>
                  <td>USL-C Regular Season</td>
              </tr>
              <tr data-year="2023">
                  <td><a href="https://www.youtube.com/watch?v=3nEnZNj6jrM" target="_blank" rel="noopener noreferrer">July 29, 2023</a></td>
                  <td>2-0</td>
                  <td>Louisville</td>
                  <td>Lynn Family Stadium</td>
                  <td>USL-C Regular Season</td>
              </tr>
              <tr data-year="2022">
                <td><a href="https://www.youtube.com/watch?v=ev2CSovEGi4" target="_blank">August 31, 2022</a></td>
                  <td>2-1</td>
                  <td>Indianapolis</td>
                  <td>Carroll Stadium</td>
                  <td>USL-C Regular Season</td>
              </tr>
              <tr data-year="2022">
                <td><a href="https://www.youtube.com/watch?v=5712LSGXim8" target="_blank">March 26, 2022</a></td>
                  <td>1-1</td>
                  <td>Draw</td>
                  <td>Lynn Family Stadium</td>
                  <td>USL-C Regular Season</td>
              </tr>
              <tr data-year="2021">
                <td>October 16, 2021</td>
                  <td>1-0</td>
                  <td>Indianapolis</td>
                  <td>Carroll Stadium</td>
                  <td>USL-C Regular Season</td>
              </tr>
              <tr data-year="2021">
                <td>September 18, 2021</td>
                  <td>0-2</td>
                  <td>Louisville</td>
                  <td>Carroll Stadium</td>
                  <td>USL-C Regular Season</td>
                </tr>
                <tr data-year="2021">
                <td>June 26, 2021</td>
                  <td>3-3</td>
                  <td>Draw</td>
                  <td>Lynn Family Stadium</td>
                  <td>USL-C Regular Season</td>
                </tr>
              <tr data-year="2021">
                <td>May 29, 2021</td>
                <td>1-2</td>
                <td>Indianapolis</td>
                <td>Lynn Family Stadium</td>
                <td>USL-C Regular Season</td>
              </tr>
              <tr data-year="2020">
              <td>August 8, 2020</td>
                <td>1-1</td>
                <td>Draw</td>
                <td>Lynn Family Stadium</td>
                <td>USL-C Regular Season*</td>
              </tr>
              <tr data-year="2020">
              <td>August 26, 2020</td>
                <td>1-0</td>
                <td>Louisville</td>
                <td>Lynn Family Stadium</td>
                <td>USL-C Regular Season*</td>
              </tr>
              <tr data-year="2020">
              <td>September 5, 2020</td>
                <td>1-3</td>
                <td>Louisville</td>
                <td>Lucas Oil Stadium</td>
                <td>USL-C Regular Season*</td>
              </tr>
              <tr data-year="2020">
              <td>September 16, 2020</td>
                <td>2-0</td>
                <td>Louisville</td>
                <td>Lucas Oil Stadium</td>
                <td>USL-C Regular Season*</td>
              </tr>
              <tr data-year="2019">
                <td><a href="https://www.uslchampionship.com/indyeleven-louisvillecityfc-1037249" target="_blank" rel="noopener noreferrer">June 29, 2019</a></td>
                <td>1-1</td>
                <td>Draw</td>
                <td>Lucas Oil Stadium</td>
                <td>USL-C Regular Season</td>
              </tr>
              <tr data-year="2019">
                <td><a href="https://www.uslchampionship.com/louisvillecityfc-indyeleven-1037416" target="_blank" rel="noopener noreferrer">August 30, 2019</a></td>
                <td>1-1</td>
                <td>Draw</td>
                <td>Slugger Field</td>
                <td>USL-C Regular Season</td>
              </tr>
              <tr data-year="2019">
                <td><a href="https://www.uslchampionship.com/louisvillecityfc-indyeleven-1037416" target="_blank" rel="noopener noreferrer">November 9, 2019</a></td>
                <td>1-3</td>
                <td>Louisville</td>
                <td>Carroll Stadium, IUPUI</td>
                <td>USL Eastern Conference Final</td>
              </tr>
              <tr data-year="2018">
                <td>October 20, 2018</td>
                <td>4-1</td>
                <td>Louisville</td>
                <td>Slugger Field</td>
                <td>USL Playoffs</td>
              </tr>
              <tr data-year="2018">
                <td>October 13, 2018</td>
                <td>0 - 1 (PK)</td>
                <td>Louisville</td>
                <td>Slugger Field</td>
                <td>USL</td>
              </tr>
              <tr data-year="2018">
                <td>August 5, 2018</td>
                <td>2 - 2</td>
                <td>-DRAW-</td>
                <td>Slugger Field</td>
                <td>USL</td>
              </tr>
              <tr data-year="2018">
                <td>May 5, 2018</td>
                <td>1 (PK) - 0</td>
                <td>Indianapolis</td>
                <td>Lucas Oil Stadium</td>
                <td>USL</td>
              </tr>
              <tr data-year="2017">
                <td>March 18, 2017</td>
                <td>1 - 1</td>
                <td>-DRAW-</td>
                <td>Evansville, IN</td>
                <td>Friendly</td>
              </tr>
              <tr data-year="2016">
                <td>June 1, 2016</td>
                <td>2 - 1</td>
                <td>Indianapolis</td>
                <td>Carroll Stadium, IUPUI</td>
                <td>US Open Cup</td>
              </tr>
              <tr data-year="2016">
                <td>March 19, 2016</td>
                <td>1 - 0</td>
                <td>Louisville</td>
                <td>Slugger Field <sup title="Closed to public">*</sup></td>
                <td>Friendly</td>
              </tr>
              <tr data-year="2015">
                <td>May 27, 2015</td>
                <td>0 - 2</td>
                <td>Louisville</td>
                <td>Carroll Stadium, IUPUI</td>
                <td><a href="https://twitter.com/77_Dredd/status/1051987296222961664">US Open Cup</a></td>
              </tr>

              <tr data-year="1945">
                <td>October 27, 1945</td>
                <td>1 - 1</td>
                <td>Louisville</td>
                <td>Grünwalder Stadion</td>
                <td>One-off WWII Victory Match</td>
              </tr>

              <tr data-year="1942">
                <td>January 2, 1942</td>
                <td>1 - 1</td>
                <td>Louisville</td>
                <td>Grünwalder Stadion</td>
                <td>Part of celebrations following the signing of the <abbr title="United Nations">UN</abbr> charter the day before.</td>
              </tr>

              <tr data-year="1937">
                <td>July 18, 1937</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>Madison, Indiana</td>
                <td>Rock Throw Cookout</td>
              </tr>

              <tr data-year="1936">
                <td>July 4, 1936</td>
                <td>0 - 4</td>
                <td>Indianapolis</td>
                <td>Central State Hospital Grounds</td>
                <td>The teams put on an exhibition match for researchers and patients for Independence Day</td>
              </tr>

              <tr data-year="1932">
                <td>November 9th, 1932</td>
                <td>1 - 2</td>
                <td>Indianapolis</td>
                <td>Indiana State Fairgrounds</td>
                <td>The teams played a celebration game for the election of Franklin D. Roosevelt</td>
              </tr>

              <tr data-year="1926">
                <td>August 4 & August 20 1926</td>
                <td>1 - 1</td>
                <td>Draw</td>
                <td>Flood zone</td>
                <td>N/A</td>
              </tr>

              <tr data-year="1925">
                <td>May 27, 1925</td>
                <td>4 - 1</td>
                <td>Indianapolis</td>
                <td>Indiana Fairgrounds</td>
                <td>Coca-Cola Cocaine Classic</td>
              </tr>

              <tr data-year="1921">
                <td>October 4, 1921</td>
                <td>19 - 7</td>
                <td>Indianapolis</td>
                <td>Newark, NJ</td>
                <td>Pre-World Series exhibition match</td>
              </tr>

              <tr data-year="1918">
                <td>May 27, 1918</td>
                <td>3 - 1</td>
                <td>Louisville</td>
                <td>Kentucky State Fairgrounds</td>
                <td>Jib-Jab Footballery Challenge</td>
              </tr>

              <tr data-year="1878">
                <td>May 27, 1878</td>
                <td>9 - 8</td>
                <td>Louisville</td>
                <td>Churchill Downs Infield</td>
                <td>Kentucky Derby Sporting Goodtimes Championship</td>
              </tr>

              <tr data-year="1868">
                <td>September 2, 1868 - 'The Bloody Affair'</td>
                <td>0 - 0</td>
                <td>Draw</td>
                <td>Indianapolis Motor Speedway Infield</td>
                <td>N/A</td>
              </tr>

              <tr data-year="1865">
                <td>April 18, 1865</td>
                <td>4 - 4</td>
                <td>Draw</td>
                <td>Louisville's Taylor Barracks drill field</td>
                <td>A battle match to take the country's attention off the assassination of Abraham Lincoln, reigniting the rivalry after disruption by the Civil War</td>
              </tr>

              <tr data-year="ancient">
                <td>1280 BC - 1900 AD</td>
                <td>???</td>
                <td>Lost to history</td>
                <td>The old country, the new world</td>
                <td>LIPAFC reportedly the model for the Olympics. Only the Watchers and Stan Lee's ghost know for sure.</td>
              </tr>
            </tbody>
          </table>
        </div>
    </section>
    </>
  );
}