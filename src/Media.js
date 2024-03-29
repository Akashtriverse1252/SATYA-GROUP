import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import Gallerybox from "./Gallerybox";
import { Medianav } from "./Medianav";
import { Years } from "./Years";
import LightGallery from "lightgallery/react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

var decodeHTML = function (html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

function createMarkup(content) {
  return { __html: decodeHTML(content) };
}

export const Media = ({ match }) => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const slug = match.params.slug ? match.params.slug : "";
  let history = useHistory();

  const [pagedata, setPagedata] = useState([]);
  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      const response = await axios.get(
        `https://www.satyagroups.in/api/media.php?y=${slug}`
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
      <div className="breadcrum">
        <div className="container">
          <div className="row">
            <div className="breadcumtab">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/media">Media</Link>
                </li>
                <li>Advertisments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="media">
        <div className="container">
          <div className="row">
            <div className="web-container">
              <div className="mediarow">
                <div
                  className="title"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="100"
                >
                  <h2>Media</h2>
                </div>
                {pagedata.data.description ? (
                  <p
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="600"
                    data-aos-once="true"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="100"
                    dangerouslySetInnerHTML={createMarkup(
                      pagedata.data.description
                    )}
                  ></p>
                ) : null}
                <div className="mediastn d-flex justify-content-between">
                  <Medianav />
                  <div className="medright">
                    <Years mediay={pagedata.mediayears} />
                    <Tabs
                      defaultIndex={0}
                      onSelect={(index) => console.log(index)}
                    >
                      <TabList className="d-flex justify-content-between">
                        {pagedata.mediamonths ? (
                          <div>
                            {pagedata.mediamonths.map((mediaM) => (
                              <Tab>{mediaM.monthname}</Tab>
                            ))}
                          </div>
                        ) : null}
                      </TabList>
                      {pagedata.mediamonths ? (
                        <div>
                          {pagedata.media.gallery.map((galleryData, index3) => (
                            <TabPanel>
                              <Gallerybox gallery_data={galleryData.galData} />
                            </TabPanel>
                          ))}
                        </div>
                      ) : null}
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
