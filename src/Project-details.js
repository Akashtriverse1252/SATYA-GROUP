import React, { useEffect, useState, useRef } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Slider from "react-slick";
import Locationpop from "./Locationpop";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import background from "./images/service-apartment-amenities_banner.jpg";
import our_brands_zudio from "./images/Logo/Zudio.webp";
import our_brands_bata from "./images/Logo/bata-satya-logo.webp";
import our_brands_haldiram from "./images/Logo/haldiram-logo.webp";
import our_brands_masti_zone from "./images/Logo/masti-zone-logo.webp";
import our_brands_rolls_king from "./images/Logo/rolls-king.webp";
import Helmet from "react-helmet";

window.weburl = "https://www.satyagroups.in/";

var decodeHTML = function (html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

function createMarkup(content) {
  return { __html: decodeHTML(content) };
}

export const Project_details = ({ match }) => {
  const [user_name, setusername] = useState();
  const [user_phone, setuserphone] = useState();
  const [user_email, setuseremail] = useState();
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  // Focus
  const ref_name = useRef(null);
  const ref_phone = useRef(null);
  const ref_email = useRef(null);

  function isValidPhone(phone) {
    const regex = /^[6-9]\d{9}$/gi;
    return regex.test(phone);
  }

  const [responseval, setresponseval] = useState("");
  const handleSubmit = (enqType, elink) => {
    if (!user_name) {
      alert("Please enter username.");
      ref_name.current.focus();
      return false;
    } else if (!isValidPhone(user_phone)) {
      alert("Please enter valid phone number.");
      ref_phone.current.focus();
      return false;
    } else {
      document.getElementById("submit_button_text").innerHTML = "Submitting...";
      const url = "https://www.satyagroups.in/api/insert_hook.php";
      let fData = new FormData();
      fData.append("user_name", user_name);
      fData.append("user_phone", user_phone);
      fData.append("user_email", user_email ? user_email : "");
      fData.append("utm_url", window.location.href);
      fData.append("td_name", "project_enquiry");
      fData.append("td_type", enqType);
      axios
        .post(url, fData)
        .then((response) =>
          response.data == "success"
            ? enqType == "brochure"
              ? (window.location.href = elink)
              : toggleShow(true)
            : ""
        )
        .catch((error) => alert(error));
    }
  };

  const Amenitiesbg = {
    backgroundImage: `url(${background})`,
  };

  const slug = match.params.slug;
  const [pagedata, setPagedata] = useState([]);

  const [enquirefrm, setActive1] = useState("false");
  const [data, setData] = useState([]);
  const [show, toggleShow] = useState(false);

  const handleToggle1 = () => {
    setActive1(!enquirefrm);
  };

  let history = useHistory();

  useEffect(() => {
    let mounted = true;

    // Aos.init({ duration: 2000 });

    const loadData = async () => {
      const response = await axios.get(
        `https://www.satyagroups.in/api/projects_details.php?url=${slug}`
      );

      if (mounted) {
        setPagedata(response.data);
        // setData(response.data.products.accordions);
      }
    };
    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  console.log(pagedata);
  if (pagedata.length == 0) {
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
    autoplaySpeed: 5000,
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
  var settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          navigator: false,
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
      {show && (
        <div className="form_thankyou">
          <div className="form_thankyou_data">
            <i
              className="crs_btn"
              onClick={() => {
                toggleShow(!show);
              }}
            >
              &#10006;
            </i>
            <div>
              <h5>Thank you for your Enquiry</h5>
              <span>Our expert will be in touch with you shortly.</span>
            </div>
          </div>
        </div>
      )}
      <Helmet>
        <title>
          {pagedata.project.metatitle ? pagedata.project.metatitle : ""}
        </title>
        <meta
          name="description"
          content={pagedata.project.metadisc ? pagedata.project.metadisc : ""}
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Header />
      <div className="project_head">
        <div className="projectrow justify-content-between">
          <div
            className="projectbanner"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="600"
            data-aos-once="true"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
          >
            <img src={pagedata.project.probannerdesk} />
            <span className="img_type">
              {pagedata.project.probannermobtype}
              {/* artistic Image */}
            </span>
          </div>
          <div
            className="enquireform"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="600"
            data-aos-once="true"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
          >
            <div className="proenquire">
              <img src={pagedata.project.logo} />
              <h2>Register your interest</h2>
              <ul className="form d-flex flex-wrap justify-content-between">
                <li>
                  <input
                    type="text"
                    placeholder="Name*"
                    name="user_name"
                    id="user_name"
                    required
                    value={user_name}
                    onChange={(e) => setusername(e.target.value)}
                    ref={ref_name}
                  />
                </li>
                <li>
                  <input
                    type="tel"
                    placeholder="Mobile No*"
                    name="user_phone"
                    id="user_phone"
                    required
                    value={user_phone}
                    onChange={(e) => setuserphone(e.target.value)}
                    ref={ref_phone}
                  />
                </li>
                <li>
                  <input
                    type="submit"
                    value="submit"
                    className="btnfill button-2"
                    onClick={() => handleSubmit("pro_enquiry", "")}
                  />
                </li>
              </ul>
              {pagedata.project.rerano ? (
                <p
                  dangerouslySetInnerHTML={createMarkup(
                    pagedata.project.rerano
                  )}
                ></p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrum">
        <div className="container">
          <div className="row">
            <div className="breadcumtab">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/our-projects">Our Projects</Link>
                </li>
                <li>{pagedata.project.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="overview">
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
                data-aos-delay="300"
              >
                <h2>OVERVIEW</h2>
              </div>
              <div className="overviewrow">
                <div className="projectcont">
                  <h1
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-duration="600"
                    data-aos-once="true"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="300"
                  >
                    {pagedata.project.overview_heading}
                  </h1>
                  {pagedata.project.overview ? (
                    <div>
                      {pagedata.project.overview.map((over_content) => (
                        <p
                          data-aos="fade-in"
                          data-aos-offset="200"
                          data-aos-duration="600"
                          data-aos-once="true"
                          data-aos-easing="ease-in-sine"
                          data-aos-delay="300"
                          dangerouslySetInnerHTML={createMarkup(
                            over_content.descp
                          )}
                        ></p>
                      ))}
                    </div>
                  ) : null}
                </div>
                <div className="pprojecthighlights">
                  <ul
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="500"
                    data-aos-once="true"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="300"
                  >
                    <li>
                      <strong>Status </strong>
                      <span>{pagedata.project.status}</span>
                    </li>
                    <li>
                      <strong>Type </strong>
                      <span>{pagedata.project.type}</span>
                    </li>
                    <li>
                      <strong>Location </strong>
                      <span
                        dangerouslySetInnerHTML={createMarkup(
                          pagedata.project.location
                        )}
                      ></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {pagedata.project.brands ? (
        <div className="our-brands">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="our_brand_scn d-flex justify-content-center align-item-center">
                  <div
                    className="title"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-duration="600"
                    data-aos-once="true"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="300"
                  >
                    <h2>Brands on Board</h2>
                  </div>
                  <div className="our-brands-cnt specific-slider">
                    <div className="clintellestn">
                      <div className="clintelbox">
                        <ul>
                          {pagedata.project.brands.map((brandsData) => (
                            <li key={brandsData.id}>
                              <img
                                src={brandsData.limg}
                                alt={brandsData.title}
                              />
                            </li>
                          ))}
                        </ul> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {pagedata.project.amenities || pagedata.project.features ? (
        <div className="amenities">
          <div className="container">
            <div className="row">
              <div className="web-container"></div>
            </div>
          </div>
          {pagedata.project.amenities ? (
            <div
              className="amenitiesrow"
              style={{
                backgroundImage: 'url("' + pagedata.project.amenitiesimg + '")',
              }}
            >
              <div className="row">
                <div className="container">
                  <div className="web-container">
                    <div
                      className="title"
                      data-aos="zoom-in"
                      data-aos-offset="200"
                      data-aos-duration="600"
                      data-aos-once="true"
                      data-aos-easing="ease-in-sine"
                      data-aos-delay="300"
                    >
                      <h2>Amenities</h2>
                    </div>
                    <div className="amenitiesstn0">
                      <h3
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-duration="600"
                        data-aos-once="true"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="300"
                        dangerouslySetInnerHTML={createMarkup(
                          pagedata.project.amenities_heading
                        )}
                      ></h3>
                      <ul>
                        {pagedata.project.amenities.map((data) => {
                          return (
                            <li
                              data-aos="fade-up"
                              data-aos-offset="200"
                              data-aos-duration="500"
                              data-aos-once="true"
                              data-aos-easing="ease-in-sine"
                              data-aos-delay="300"
                            >
                              <span>
                                <img src={data.icon} />
                              </span>
                              <h4
                                dangerouslySetInnerHTML={createMarkup(
                                  data.title
                                )}
                              ></h4>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {pagedata.project.features ? (
            <div className="amenitiesrowfeatures">
              <div className="row">
                <div className="container">
                  <div className="web-container">
                    <div className="amenitiesstn0">
                      <h3
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-duration="600"
                        data-aos-once="true"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="300"
                        dangerouslySetInnerHTML={createMarkup(
                          pagedata.project.features_heading
                        )}
                      ></h3>
                      <ul>
                        {pagedata.project.features.map((data2) => {
                          return (
                            <li
                              data-aos="fade-up"
                              data-aos-offset="200"
                              data-aos-duration="500"
                              data-aos-once="true"
                              data-aos-easing="ease-in-sine"
                              data-aos-delay="300"
                            >
                              <span>
                                <img src={data2.icon} />
                              </span>
                              <h4
                                dangerouslySetInnerHTML={createMarkup(
                                  data2.title
                                )}
                              ></h4>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
      {pagedata.project.gallery ? (
        <div className="gallery">
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
                  data-aos-delay="300"
                >
                  <h2>Gallery</h2>
                </div>
                <div
                  className="gslider"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="300"
                >
                  <Slider {...settings}>
                    {pagedata.project.gallery.map((gal) => {
                      return (
                        <div>
                          <div className="galleryimg">
                            <img src={gal.limg} />
                            {gal.galType ? (
                              <span>{gal.galType} Image</span>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="location">
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
                data-aos-delay="300"
              >
                <h2>Location</h2>
                <h3>
                  <strong
                    dangerouslySetInnerHTML={createMarkup(
                      pagedata.project.location_heading
                    )}
                  ></strong>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="locationbanner">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="locationrow">
                  <div
                    className="locationimg"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-duration="600"
                    data-aos-once="true"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="300"
                  >
                    <img src={pagedata.project.locationimg} />
                  </div>
                  <div className="locationcont">
                    <ul>
                      {pagedata.project.location_cont.map((locationDataNew) => {
                        return (
                          <li
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-duration="500"
                            data-aos-once="true"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="300"
                            dangerouslySetInnerHTML={createMarkup(
                              locationDataNew.valuesData
                            )}
                          ></li>
                        );
                      })}
                    </ul>
                    {pagedata.project.locationmap ? (
                      <Locationpop
                        locationmapdata={pagedata.project.locationmap}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {pagedata.project.seo_page_head ? (
        <div className="page_content">
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
                  data-aos-delay="300"
                >
                  <h2
                    dangerouslySetInnerHTML={createMarkup(
                      pagedata.project.seo_page_head
                    )}
                  ></h2>
                </div>
                <div className="page_contentrow">
                  <div className="page_content_cont">
                    <h1
                      data-aos="zoom-in"
                      data-aos-offset="200"
                      data-aos-duration="600"
                      data-aos-once="true"
                      data-aos-easing="ease-in-sine"
                      data-aos-delay="300"
                      dangerouslySetInnerHTML={createMarkup(
                        pagedata.project.seo_heading
                      )}
                    ></h1>
                    {pagedata.project.seo_content ? (
                      <div>
                        {pagedata.project.seo_content.map((paraData) => (
                          <p
                            data-aos="fade-in"
                            data-aos-offset="200"
                            data-aos-duration="600"
                            data-aos-once="true"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="300"
                            dangerouslySetInnerHTML={createMarkup(
                              paraData.paragraph
                            )}
                          ></p>
                        ))}
                        {/* {isShowMore && (
                                                <p >One of the main highlights of this project is its strategic location of the Satya plots on the Dwarka Expressway. This location offers excellent connectivity to cities like Gurgaon and Delhi NCR which is why these plots are deemed to be the best residential projects in New Gurgaon.

                                                    The apartments in Satya plots sector 99A are designed to provide a perfect blend of luxury, comfort, and convenience. With its world-class amenities and excellent location, Satya Merano Greens is an ideal choice for those looking for a luxurious and modern lifestyle in the heart of Gurgaon.

                                                    Apparently, Satya plots on the Dwarka Expressway are indeed one of the best options for individuals willing to buy plots in New Gurgaon along the Dwarka Expressway with better connectivity in the whole NCR.
                                                </p>
                                            )}
                                            <button className='button-2 readbtn' onClick={toggleReadMoreLess}>
                                                {isShowMore ? "Read Less" : "Read More"}
                                            </button> */}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      
      {pagedata.project.ebroucher != "" ||
      pagedata.project.floor_plans != "" ||
      pagedata.project.const_img != 0 ? (
        <div className="download">
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
                  data-aos-delay="300"
                >
                  <h2>Download</h2>
                </div>
                <div className="highlightbtn">
                  <ul
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="600"
                    data-aos-once="true"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="300"
                  >
                    {pagedata.project.ebroucher ? (
                      <li>
                        <a onClick={handleToggle1}>
                          <span>Brochure</span>
                        </a>
                      </li>
                    ) : null}
                    {pagedata.project.floor_plans ? (
                      <li>
                        <a href={pagedata.project.floor_plans} target="_blank">
                          <span>Floor Plans</span>
                        </a>
                      </li>
                    ) : null}
                    {pagedata.project.const_img ? (
                      <li>
                        <Link
                          to={"construction-updates/" + pagedata.project.slug}
                        >
                          <span>Construction Updates</span>
                        </Link>
                      </li>
                    ) : null}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* Enquire Form */}
      <div className={enquirefrm ? "enquirefrm" : "enquirefrm active"}>
        <div class="enquirecontainer">
          <span class="enquirecross" onClick={handleToggle1}>
            X
          </span>
          <h2>
            Fill your details to <br />
            download the Brochure
          </h2>
          <ul>
            <li>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Name*"
                pattern="[a-zA-Z\s]+"
                required
                value={user_name}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                ref={ref_name}
              />
            </li>
            <li>
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Enter your email"
                value={user_email}
                onChange={(e) => {
                  setuseremail(e.target.value);
                }}
                ref={ref_email}
              />
            </li>
            <li>
              <input
                type="text"
                name="user_phone"
                id="user_phone"
                placeholder="Mobile number*"
                pattern="[a-zA-Z\s]+"
                value={user_phone}
                onChange={(e) => {
                  setuserphone(e.target.value);
                }}
                ref={ref_phone}
              />
            </li>
          </ul>
          <button
            type="submit"
            class="btnfill button-2"
            id="submit_button"
            onClick={() => handleSubmit("brochure", pagedata.project.ebroucher)}
          >
            <span id="submit_button_text">Submit</span>
          </button>
        </div>
      </div>
      {/* Enquire Form */}
      <Footer />
    </>
  );
};
