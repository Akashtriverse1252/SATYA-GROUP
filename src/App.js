import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Error from "./Error";
import '../src/stylesheet.css';
import '../src/responsive.css';
import ScrollToTop from "./ScrollToTop";
import { Aboutus } from "./Aboutus";
import { Projects } from "./Projects";
import { Media } from "./Media";
import { Events } from "./Events";
import Eventdetail from "./Eventdetail";
import { Life_at_satya } from "./life_at_satya";
import Life_at_satya_detail from "./Life_at_satya_detail";
import { Contact } from "./Contact";
import { Career } from "./Career";
import { NRIcorner } from "./NRIcorner";
import { Homes } from "./Homes";
import { Privacy } from "./Privacy";
import { Refund } from "./Refund";
import { Disclaimer } from "./Disclaimer";
import { Construction } from "./Construction";
import { Residential } from "./Residential";
import { Commercial } from "./Comercial";
import { Project_details } from "./Project-details";
import { Retail } from "./Retail";
import { Office } from "./Office";
import { Hospitality } from "./Hospitality";
import { Faq } from "./Faq";

const App = () => {
  return (
    <>
    <Router>
    <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about-satya" component={Aboutus}></Route>
        <Route exact path="/our-projects" component={Projects}></Route>      
        <Route exact path="/media" component={Media}></Route>
        <Route exact path="/media/:slug" component={Media}></Route>
        <Route exact path="/events" component={Events}></Route>
        <Route exact path="/events/:slug" component={Events}></Route>
        <Route exact path="/event/:slug/:slug2/:slug3" component={Eventdetail}></Route>
        <Route exact path="/life-at-satya" component={Life_at_satya}></Route>
        <Route exact path="/life-at-satya/:slug" component={Life_at_satya}></Route>
        <Route exact path="/life-at-satya-data/:slug/:slug2/:slug3" component={Life_at_satya_detail}></Route>
        <Route exact path="/contact-us" component={Contact}></Route>
        <Route exact path="/career" component={Career}></Route>
        <Route exact path="/NRI-Corner" component={NRIcorner}></Route>
        <Route exact path="/privacy-policy" component={Privacy}></Route>
        <Route exact path="/refund-policy" component={Refund}></Route>
        <Route exact path="/disclaimer" component={Disclaimer}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/projects/:slug" component={Projects}></Route>
        <Route exact path="/project/:slug" component={Project_details}></Route>
        <Route exact path="/project/construction-updates/:slug" component={Construction}></Route>        
        <Route exact path="/project/construction-updates/:slug/:slug2/" component={Construction}></Route>
        <Route exact path="/faq" component={Faq}></Route>  
        <Route component={Error}></Route>
      </Switch>
      </Router>
    </>
  );
};

export default App;