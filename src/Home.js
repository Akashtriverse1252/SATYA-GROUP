import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Numbers } from "./components/Numbers";
import Slider from "react-slick";
import Banner02 from "./images/banner02.jpg";
import Banner03 from "./images/banner03.jpg";
import Studio102 from "./images/merano-green-logo.png";
import Elementone from "./images/Element_one_logo.png";
import Thehive from "./images/The_hive_logo.png";
import Meranogreen from "./images/merano-greens.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  var decodeHTML = function (html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  function createMarkup(content) {
    return { __html: decodeHTML(content) };
  }

  const [pagedata, setPagedata] = useState([]);
  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      const response = await axios.get(
        "https://www.satyagroups.in/api/homes.php"
      );
      if (mounted) {
        setPagedata(response.data);
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  console.log(pagedata);
  if (pagedata.length === 0) {
    console.log("no data");
    return null;
  }
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 600,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Header />
      <div className="jslider">
        <div className="container">
          <div className="row">
            <Slider {...settings}>
              {/* <div>
                <div className="homeslider slide01">
                  <div className="homcolft">
                    <div className="slidecont">
                      <h2
                        className="slidertitle"
                        data-aos="flip-down"
                        data-aos-offset="200"
                        data-aos-duration="600"
                        data-aos-once="true"
                        data-aos-delay="1100"
                        data-aos-easing="ease-in-sine"
                      >
                        BE A PART <br />
                        OF ROZANA’S
                        <br />
                        SENSATIONAL <br /> GROWTH STORY
                      </h2>
                      <div
                        className="slidephara ro"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-duration="600"
                        data-aos-once="true"
                        data-aos-delay="1100"
                      >
                        <ul>
                          <li>NO WORRIES OF MAINTENANCE</li>
                          <li>CONSISTENT RETURNS</li>
                          <li>SMALL TICKET SIZE INVESTMENT</li>
                          <li>PROVIDES CAPITAL APPRECIATION</li>
                        </ul>
                        <p>
                          Invest in premium pre-leased space with one of the
                          fastest growing supermarket
                        </p>
                      </div>
                      <div
                        className="webclick"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-duration="600"
                        data-aos-once="true"
                        data-aos-delay="1100"
                      >
                        <a href="https://satyagroups.in/the-hive-rozana/">
                          <span>More Details</span>
                        </a>
                      </div>
                      <div
                        className="projectlogo opacity-0"
                        data-aos="fade-in"
                        data-aos-offset="200"
                        data-aos-duration="600"
                        data-aos-once="true"
                        data-aos-delay="1500"
                        data-aos-easing="ease-in-sine"
                      >
                        <img src={Studio102} />
                      </div>
                    </div>
                  </div>
                  <div
                    className="homcolrt"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-duration="600"
                    data-aos-once="true"
                    data-aos-delay="600"
                    data-aos-easing="ease-in-sine"
                  >
                    <img src={Meranogreen} />
                     <span className="img_type">artistic Image</span> 
                  </div>
                </div>
              </div> */}

              <div>
                <div className="homeslider slide02">
                  <div className="homcolft">
                    <div className="slidecont">
                      <h2 className="slidertitle">
                        Your Apartment <br /> Our Service
                      </h2>
                      <p>
                        Lavish serviced apartments located at Element One, a
                        vibrant blend of high-street retail and private business
                        suites located in Sector 47 & 49 in the heart of
                        Gurugram
                      </p>
                      <div className="webclick">
                        <Link to="/project/serviced-apartments-at-element-one">
                          <span>More Details</span>
                        </Link>
                      </div>
                      <div className="projectlogo">
                        <img src={Elementone} />
                      </div>
                    </div>{" "}
                  </div>
                  <div className="homcolrt">
                    <img src={Banner02} />
                    {/* <span class="img_type">artistic Image</span> */}
                  </div>
                </div>
              </div>
              <div>
                <div className="homeslider slide01">
                  <div className="homcolft">
                    <div className="slidecont">
                      <h2
                        className="slidertitle"
                        data-aos="flip-down"
                        data-aos-offset="200"
                        data-aos-duration="600"
                        data-aos-once="true"
                        data-aos-delay="1100"
                        data-aos-easing="ease-in-sine"
                      >
                        Best Time <br /> To Buy An <br /> Office Space
                      </h2>
                      <div
                        className="slidephara"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-duration="600"
                        data-aos-once="true"
                        data-aos-delay="1100"
                      >
                        <p>
                          Make a smart choice to own an office space at The
                          Hive, poised to be the next emerging commercial
                          destination for urban professionals, located just off
                          the NH 248-BB Dwarka Expressway in Sector 102,
                          Gurugram.
                        </p>
                      </div>
                      <div
                        className="webclick"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-duration="600"
                        data-aos-once="true"
                        data-aos-delay="1100"
                      >
                        <Link to="project/office-spaces-at-the-hive">
                          <span>More Details</span>
                        </Link>
                      </div>
                      <div
                        className="projectlogo"
                        data-aos="fade-in"
                        data-aos-offset="200"
                        data-aos-duration="600"
                        data-aos-once="true"
                        data-aos-delay="1500"
                        data-aos-easing="ease-in-sine"
                      >
                        <img src={Thehive} />
                      </div>
                    </div>
                  </div>

                  <div
                    className="homcolrt"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-duration="600"
                    data-aos-once="true"
                    data-aos-delay="600"
                    data-aos-easing="ease-in-sine"
                  >
                    <img src={Banner03} />
                    <span class="img_type">artistic Image</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {pagedata.projects ? (
        <div className="hprojects">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div
                  className="title"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="100"
                >
                  <h2>Projects</h2>
                </div>
                <div
                  className="subtitle"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-sine"
                >
                  <h3>Ongoing</h3>
                </div>
                <div className="projectchart">
                  {pagedata.projects.ongoing[0] ||
                  pagedata.projects.ongoing[1] ? (
                    <div className="projectrow">
                      {/* Ongoing Loop Start  */}
                      {pagedata.projects.ongoing[0] ? (
                        <div
                          className="projectbox"
                          data-aos="fade-right"
                          data-aos-offset="200"
                          data-aos-duration="600"
                          data-aos-once="true"
                          data-aos-delay="200"
                          data-aos-easing="ease-in-sine"
                        >
                          <Link to={pagedata.projects.ongoing[0].slug}>
                            <img src={pagedata.projects.ongoing[0].image} />
                            <span className="img_type">artistic Image</span>

                            <h3>
                              {pagedata.projects.ongoing[0].title},{" "}
                              {pagedata.projects.ongoing[0].location}
                            </h3>
                          </Link>
                        </div>
                      ) : null}
                      {pagedata.projects.ongoing[1] ? (
                        <div
                          className="projectbox"
                          data-aos="fade-left"
                          data-aos-offset="200"
                          data-aos-duration="600"
                          data-aos-once="true"
                          data-aos-delay="200"
                          data-aos-easing="ease-in-sine"
                        >
                          <Link to={pagedata.projects.ongoing[1].slug}>
                            <img src={pagedata.projects.ongoing[1].image} />
                            <span className="img_type">artistic Image</span>

                            <h3>
                              {pagedata.projects.ongoing[1].title},{" "}
                              {pagedata.projects.ongoing[1].location}
                            </h3>
                          </Link>
                        </div>
                      ) : null}
                      {/* Ongoing Loop End */}
                    </div>
                  ) : null}
                  {pagedata.projects.ongoing[2] ||
                  pagedata.projects.ongoing[3] ? (
                    <div className="projectrow">
                      {/* Ongoing Loop Start  */}
                      {pagedata.projects.ongoing[3] ? (
                        <div
                          className="projectbox"
                          data-aos="fade-right"
                          data-aos-offset="200"
                          data-aos-duration="600"
                          data-aos-once="true"
                          data-aos-delay="200"
                          data-aos-easing="ease-in-sine"
                        >
                          <Link to={pagedata.projects.ongoing[3].slug}>
                            <img src={pagedata.projects.ongoing[3].image} />
                            <span className="img_type">Actual Image</span>

                            <h3>
                              {pagedata.projects.ongoing[3].title},{" "}
                              {pagedata.projects.ongoing[3].location}
                            </h3>
                          </Link>
                        </div>
                      ) : null}
                      {pagedata.projects.ongoing[2] ? (
                        <div
                          className="projectbox"
                          data-aos="fade-right"
                          data-aos-offset="200"
                          data-aos-duration="600"
                          data-aos-once="true"
                          data-aos-delay="200"
                          data-aos-easing="ease-in-sine"
                        >
                          <Link to={pagedata.projects.ongoing[2].slug}>
                            <img src={pagedata.projects.ongoing[2].image} />
                            <span className="img_type">artistic Image</span>

                            <h3>
                              {pagedata.projects.ongoing[2].title},{" "}
                              {pagedata.projects.ongoing[2].location}
                            </h3>
                          </Link>
                        </div>
                      ) : null}
                      {/* Ongoing Loop End */}
                    </div>
                  ) : null}
                  {pagedata.projects.ongoing[5] ||
                  pagedata.projects.ongoing[6] ? (
                    <div className="projectrow">
                      {/* Ongoing Loop Start  */}
                      {pagedata.projects.ongoing[4] ? (
                        <div
                          className="projectbox"
                          data-aos="fade-right"
                          data-aos-offset="200"
                          data-aos-duration="600"
                          data-aos-once="true"
                          data-aos-delay="200"
                          data-aos-easing="ease-in-sine"
                        >
                          <Link to={pagedata.projects.ongoing[4].slug}>
                            <img src={pagedata.projects.ongoing[4].image} />
                            <span className="img_type">artistic Image</span>

                            <h3>
                              {pagedata.projects.ongoing[4].title},{" "}
                              {pagedata.projects.ongoing[4].location}
                            </h3>
                          </Link>
                        </div>
                      ) : null}
                      {pagedata.projects.ongoing[5] ? (
                        <div
                          className="projectbox"
                          data-aos="fade-right"
                          data-aos-offset="200"
                          data-aos-duration="600"
                          data-aos-once="true"
                          data-aos-delay="200"
                          data-aos-easing="ease-in-sine"
                        >
                          <Link to={pagedata.projects.ongoing[5].slug}>
                            <img src={pagedata.projects.ongoing[5].image} />
                            <span className="img_type">artistic Image</span>

                            <h3>
                              {pagedata.projects.ongoing[5].title},{" "}
                              {pagedata.projects.ongoing[5].location}
                            </h3>
                          </Link>
                        </div>
                      ) : null}
                      {/* Ongoing Loop End */}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="haboutus">
        <div className="container">
          <div className="row">
            <div className="web-container">
              <div
                className="title"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="600"
                data-aos-once="true"
                data-aos-easing="ease-in-sine"
                data-aos-delay="100"
              >
                <h2>About us</h2>
              </div>
              <div className="haboutrow">
                <div
                  className="haboutimg"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="200"
                >
                  <img src={pagedata.aboutus.hpbanner} />
                </div>
                <div className="haboutcont">
                  <h1
                    data-aos="fade"
                    data-aos-offset="300"
                    data-aos-duration="600"
                    data-aos-once="true"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="800"
                  >
                    {pagedata.aboutus.hptitle}
                  </h1>
                  <div
                    dangerouslySetInnerHTML={createMarkup(
                      pagedata.aboutus.sdesc
                    )}
                  ></div>
                  <Link class="btnfill button-2" to="/about-satya">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Numbers contact={pagedata.aboutus} />
      {pagedata.category ? (
        <div className="whtwedo">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div
                  className="title"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="100"
                >
                  <h2>What we do</h2>
                </div>
                {/* Loop Start */}
                <div className="categoryrow">
                  {/* Loop Start */}
                  {pagedata.category.map((catdata) => (
                    <div
                      className="categorybox"
                      data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-duration="600"
                      data-aos-once="true"
                      data-aos-delay="300"
                    >
                      <Link to={"/projects/" + catdata.heading}>
                        <img src={catdata.image} />
                        <div className="categorycent">
                          <div className="categorycont">
                            <h2>{catdata.heading}</h2>
                            <p>{catdata.description}</p>
                            <span>Know More</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                  {/* Loop End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <Footer />
    </>
  );
};
export default Home;
