import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Project01 from "./images/The_hive_project.jpg";
import Project02 from "./images/Studio102_project.jpg";
import Project03 from "./images/Merano_green_project.jpg";
import Project04 from "./images/Element_one_project.jpg";
import Project05a from "./images/the-hermitage-small.jpg";
import Project06 from "./images/The_hermitage_villas.jpg";
import Project07 from "./images/Centrum-Plaza.jpg";
import Project08 from "./images/Malwa-County.jpg";
import Project09 from "./images/Malwa-Heights.jpg";
import Project10 from "./images/Malwa-Jewels.jpg";
import Project11 from "./images/The-Galaxy.jpg";
import Project12 from "./images/the-legend-creative.jpg";
import Project13 from "./images/nora.jpg";
import Project14 from "./images/city-center.jpg";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

var decodeHTML = function (html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

function createMarkup(content) {
  return { __html: decodeHTML(content) };
}

export const Projects = ({ match }) => {
  const slug = match.params.slug ? match.params.slug : "";

  const [pagedata, setPagedata] = useState([]);

  let history = useHistory();

  const [data, setData] = useState([]);
  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      const response = await axios.get(
        `https://www.satyagroups.in/api/projects.php?url=${slug}`
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

  return (
    <>
      <Header />
      {pagedata.catVal ? (
        <div className="banner">
          <div className="bannerimg">
            <img src={pagedata.catVal.bimage} />
          </div>
        </div>
      ) : null}
      <div className="breadcrum">
        <div className="container">
          <div className="row">
            <div className="breadcumtab">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {pagedata.catVal ? (
                  <li>{pagedata.catVal.title}</li>
                ) : (
                  <li>Our Projects</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="inprojects">
        <div className="container">
          <div className="row">
            <div className="web-container">
              {pagedata.catVal ? (
                <div
                  className="title"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="300"
                >
                  <h2>{pagedata.catVal.title}</h2>
                  <div
                    dangerouslySetInnerHTML={createMarkup(
                      pagedata.catVal.ldesc
                    )}
                  ></div>
                </div>
              ) : (
                <div
                  className="title"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="300"
                >
                  <h2>Projects</h2>
                  <div
                    dangerouslySetInnerHTML={createMarkup(
                      pagedata.projects.description
                    )}
                  ></div>
                </div>
              )}
              {!pagedata.catVal ? (
                <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                  <TabList>
                    <Tab
                      data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-duration="600"
                      data-aos-once="true"
                      data-aos-easing="ease-in-sine"
                      data-aos-delay="300"
                    >
                      Ongoing
                    </Tab>
                    <Tab
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-duration="600"
                      data-aos-once="true"
                      data-aos-easing="ease-in-sine"
                      data-aos-delay="300"
                    >
                      Completed
                    </Tab>
                  </TabList>
                  <TabPanel>
                    {pagedata.projects.ongoing ? (
                      <div className="pprojectrow">
                        {/* Loop Start */}
                        {pagedata.projects.ongoing.map((data, index) => (
                          <div
                            className="pprojectbox"
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-duration="600"
                            data-aos-once="true"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="300"
                            key={index}
                          >
                            <Link to={data.slug}>
                              <div className="pprojectimg">
                                {data.image ? (
                                  <>
                                    <img src={data.image} alt="" />
                                    <span className="img_type">
                                     {/* {data.probannermobtype} */}
                                     artistic Image
                                    </span>
                                  </>
                                ) : null}
                                <div className="projectinfo">
                                  <ul>
                                    <li>
                                      <strong>LOCATION</strong>
                                      <p
                                        dangerouslySetInnerHTML={{
                                          __html: data.location,
                                        }}
                                      ></p>
                                    </li>
                                    <li>
                                      <strong>PROPERTY TYPE</strong>
                                      <p
                                        dangerouslySetInnerHTML={{
                                          __html: data.type,
                                        }}
                                      ></p>
                                    </li>
                                    <li>
                                      <strong>STATUS</strong>
                                      <p
                                        dangerouslySetInnerHTML={{
                                          __html: data.status,
                                        }}
                                      ></p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <p>
                                {data.title},{" "}
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: data.location2,
                                  }}
                                ></span>
                              </p>
                            </Link>
                          </div>
                        ))}
                        {/* Loop End */}
                      </div>
                    ) : null}
                  </TabPanel>
                  <TabPanel>
                    {pagedata.projects.completed ? (
                      <div className="pprojectrow">
                        {/* Loop Start */}
                        {pagedata.projects.completed.map((data2) => {
                          return (
                            <div
                              className="pprojectbox"
                              data-aos="fade-up"
                              data-aos-offset="200"
                              data-aos-duration="600"
                              data-aos-once="true"
                              data-aos-easing="ease-in-sine"
                              data-aos-delay="300"
                            >
                              <Link to={data2.slug}>
                                <div className="pprojectimg">
                                  {data2.image ? (
                                    <>
                                    <img src={data2.image} alt="" />
                                    <span className="img_type">artistic image</span>
                                    </>
                                  ) : null}
                                  <div className="projectinfo">
                                    <ul>
                                      <li>
                                        <strong>LOCATION</strong>
                                        <p
                                          dangerouslySetInnerHTML={{
                                            __html: data2.location,
                                          }}
                                        ></p>
                                      </li>
                                      <li>
                                        <strong>PROPERTY TYPE</strong>
                                        <p
                                          dangerouslySetInnerHTML={{
                                            __html: data2.type,
                                          }}
                                        ></p>
                                      </li>
                                      <li>
                                        <strong>STATUS</strong>
                                        <p
                                          dangerouslySetInnerHTML={{
                                            __html: data2.status,
                                          }}
                                        ></p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <p>
                                  {data2.title},{" "}
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: data2.location2,
                                    }}
                                  ></span>
                                </p>
                              </Link>
                            </div>
                          );
                        })}
                        {/* Loop End */}
                      </div>
                    ) : null}
                  </TabPanel>
                </Tabs>
              ) : (
                <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                  <TabPanel>
                    {pagedata.projects_cat ? (
                      <div className="pprojectrow">
                        {/* Loop Start */}
                        {pagedata.projects_cat.map((data) => {
                          return (
                            <div
                              className="pprojectbox"
                              data-aos="fade-up"
                              data-aos-offset="200"
                              data-aos-duration="600"
                              data-aos-once="true"
                              data-aos-easing="ease-in-sine"
                              data-aos-delay="300"
                            >
                              <Link to={data.slug}>
                                <div className="pprojectimg">
                                  {data.image ? (
                                    <>
                                    <img src={data.image} alt="" />
                                        <span className="img_type">artistic image</span>
                                    </>
                                  ) : null}
                                  <div className="projectinfo">
                                    <ul>
                                      <li>
                                        <strong>LOCATION</strong>
                                        <p
                                          dangerouslySetInnerHTML={{
                                            __html: data.location,
                                          }}
                                        ></p>
                                      </li>
                                      <li>
                                        <strong>PROPERTY TYPE</strong>
                                        <p
                                          dangerouslySetInnerHTML={{
                                            __html: data.type,
                                          }}
                                        ></p>
                                      </li>
                                      <li>
                                        <strong>STATUS</strong>
                                        <p
                                          dangerouslySetInnerHTML={{
                                            __html: data.status,
                                          }}
                                        ></p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <p>
                                  {data.title},{" "}
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: data.location2,
                                    }}
                                  ></span>
                                </p>
                              </Link>
                            </div>
                          );
                        })}
                        {/* Loop End */}
                      </div>
                    ) : null}
                  </TabPanel>
                </Tabs>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
