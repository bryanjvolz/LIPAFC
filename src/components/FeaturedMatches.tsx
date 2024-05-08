import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

export function FeaturedMatches() {
  return (
    <>
      <section id="featured-matchups" className="featured-matchups">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="swiper-container"
        >
          <SwiperSlide data-year="2018">
            <div className="container">
              <h2
                className="swiper-title"
                title="2018"
                data-swiper-parallax="-100"
              >
                2018 Playoffs
              </h2>
              <p>
                <em>Someone</em> hired a plane to fly over Slugger Field in the
                run up to the first meeting of the two teams in the playoffs.
                Most people read it as "Louisville loves Nickleback" but some
                read it as "Louisville loves the Nickelback XI". Take your pick,
                hilarious either way.
              </p>
              <p className="credits" data-swiper-parallax-opacity="0.5">
                <a
                  href="https://twitter.com/Utterback13/status/1053787277346906112"
                  target="_top"
                >
                  Scott Utterback/Twitter
                </a>{" "}
                //{" "}
                <a href="https://www.courier-journal.com/story/news/2018/10/20/louisville-city-fc-love-nickelback-banner-says-so/1715001002/">
                  Courier-Journal
                </a>
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide data-year="1926">
            <div className="container">
              <h2
                className="swiper-title"
                title="1926"
                data-swiper-parallax="-100"
              >
                1926
              </h2>
              <p>
                The only ever #LIPAFC split squad game in history. Happened
                after original game in early 1926 was rained out in Louisville.
                Both games ended in 1-0 for each team resulting in the o lot
                known overall 1-1 draw where both teams got 3 points.
              </p>
              <p className="credits" data-swiper-parallax-opacity="0.5">
                <a
                  href="https://twitter.com/PattyIce3/status/1052668721947394050"
                  target="_top"
                >
                  Patrick Blanton/Twitter
                </a>{" "}
                // Image:{" "}
                <a href="https://pixabay.com/users/Hans-2/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=123200">
                  Hans Braxmeier
                </a>
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide data-year="1937">
            <div className="container">
              <h2 className="swiper-title" title="1937">
                1937
              </h2>
              <p>
                As a gesture of good will, @The_BYB & @LouCoopers asked
                @DieInnenstadt to a #LIPAFC rock throw. When their shameful
                attempt was jeered, they responded by bragging on how many of
                them attended. Thus chased away to chants of "#FUFCC!", they
                were never welcomed back.
              </p>
              <p className="credits" data-swiper-parallax-opacity="0.5">
                <a
                  href="https://twitter.com/Co1BYB/status/1053669829129969664"
                  target="_top"
                >
                  City of Firsts Brickyard Battalion/Twitter
                </a>{" "}
                // Image:{" "}
                <a href="https://commons.wikimedia.org/wiki/File:Harrijasotzailea_harri_zilindrikoarekin_lanean2.jpg">
                  Wikipedia
                </a>
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide data-year="1918">
            <div className="container">
              <h2
                className="swiper-title"
                title="1918"
                data-swiper-parallax="-100"
              >
                1918
              </h2>
              <p>
                Digby “Diggy” McDougal’s infamous “headwound hat trick” made its
                appearance during this particularly brutal installment of the
                LIPAFC.
              </p>
              <p className="credits" data-swiper-parallax-opacity="0.5">
                <a
                  href="https://twitter.com/LouHeretics/status/1051199503745933313"
                  target="_top"
                >
                  Louisville Heretics/Twitter
                </a>
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide data-year="1868">
            <div className="container">
              <h2
                className="swiper-title"
                title="1868"
                data-swiper-parallax="-100"
              >
                1868
              </h2>
              <h3>'THE BLOODY AFFAIR'</h3>
              <p>
                Forever known as "The Bloody Affair" the 0-0 draw produced 14
                yellows, but oddly only one straight red when @IndyEleven legend
                "Mad" Marty Collins used his prosthetic leg to pummel the
                linesman after an offside call negated a late goal.
              </p>
              <p className="credits" data-swiper-parallax-opacity="0.5">
                <a
                  href="https://twitter.com/GrooveMachine/status/1051138937631244288"
                  target="_top"
                  aria-label="Content source: Groover Machine on Twitter"
                >
                  Groove Machine/Twitter
                </a>{" "}
                // Image:{" "}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Prosthetic_leg.jpg"
                  target="_blank"
                  aria-label="Prosthetic Leg image from Wikipedia"
                >
                  Wikipedia
                </a>
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide data-year="1860">
            <div className="container">
              <h2
                className="swiper-title"
                title="1860"
                data-swiper-parallax="-100"
              >
                1860
              </h2>
              <p>
                Johnny “Albatross” O’Rourke bagged 4 goals in the 1860 iteration
                of #LIPAFC which is why a 4 goal performance is referred to as
                an Albatross. Johnny passed in the 1863 Battle of Dog Hill, so
                we must continue to remember his service and his striking.
                Here’s to you Johnny!
              </p>
              <p className="credits" data-swiper-parallax-opacity="0.5">
                <a
                  href="https://twitter.com/brad_estes/status/1053275895920816131"
                  target="_top"
                  aria-label="Content source: Brad Estes on Twitter"
                >
                  Brad Estes/Twitter
                </a>{" "}
                // Image:{" "}
                <a
                  href="https://pixabay.com/users/skeeze-272447/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3854793"
                  aria-label="Albatross bird image from Skeeze on Pixabay"
                >
                  skeeze
                </a>
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide data-year="30">
            <div className="container">
              <h2
                className="swiper-title"
                title="30 AD"
                data-swiper-parallax="-100"
              >
                30 AD
              </h2>
              <p>
                Everyone knows Pompeii was buried in AD 79 by Mount Vesuvius.
                But did you know, on the walls of one of those incredibly well
                preserved homes, an inscription was found reading "The gods do
                not deduct from man's allotted span the hours spent watching the
                #LIPAFC"
              </p>
              <p className="credits" data-swiper-parallax-opacity="0.5">
                <a
                  href="https://twitter.com/MattDaltron/status/1053299297867964416"
                  target="_blank"
                  aria-label="Content source: Matt Daltron on Twitter"
                >
                  Matt Daltron/Twitter
                </a>{" "}
                // Image:{" "}
                <a
                  href="https://commons.wikimedia.org/wiki/Scavi_archeologici_di_Pompei#/media/File:Pompeji_Terme_Stabiane_Apodyterion.jpg"
                  aria-label="Pompei image from Wikipedia"
                >
                  Wikipedia
                </a>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
