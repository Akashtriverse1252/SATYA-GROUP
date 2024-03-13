import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css"
import Logo from '../images/satya_group.png';
import axios from 'axios';
export const Header = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
        window.addEventListener('scroll', changeBackground);             
    
        return () => {
          window.removeEventListener('scroll', changeBackground);
        }
       }, []);
       const canonical = window.location.href; console.log(canonical);
       const [menus, setActive] = useState("false");
          
            const handleToggle = () => {
              setActive(!menus);
            };
            const [enquirefrm, setActive1] = useState("false");
          
            const handleToggle1 = () => {
              setActive1(!enquirefrm);
            };
       const [header,setNavbar] = useState(false);
        const changeBackground = () => {
         if(window.scrollY >= 80) {
           setNavbar(true);
         } else {
           setNavbar(false);
         }
        };


        const[user_name, setusername] = useState();
const[user_phone, setuserphone] = useState();
const[user_email, setuseremail] = useState();

  // Focus
  const ref_name = useRef(null);
  const ref_phone = useRef(null);
  const ref_email = useRef(null);


  function isValidPhone(phone) {
    const regex = /^[6-9]\d{9}$/gi;
    return regex.test(phone);
  }
  
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSubmit = ()  => {
    
    if (!user_name) {
      alert('Please enter username.');
      ref_name.current.focus();
      return false;
    }
    else if (!isValidPhone(user_phone)) {
      alert('Please enter valid phone number.');
      ref_phone.current.focus();
      return false;
    }
    else if (!isValidEmail(user_email)) {
      alert('Please enter valid email address.');
      ref_email.current.focus();
      return false;
    }
    else {
      document.getElementById("submit_button_text").innerText='SUBMITTING...';
      const url = "https://www.satyagroups.in/api/insert_hook.php";
      let fData = new FormData();
      fData.append('user_name',user_name);
      fData.append('user_phone',user_phone);
      fData.append('user_email',user_email);
      fData.append('utm_url',window.location.href);
      fData.append('td_name','header_enquiry');
      
      axios.post(url, fData)
      .then(response => alert(response.data))
      .catch(error => alert(error));
      console.log(true);
      document.getElementById("submit_button_text").innerText='SUBMIT';
      document.getElementById("user_name").value='';
      document.getElementById("user_phone").value='';
      document.getElementById("user_email").value='';
    }
  }
  return (
    <header>
      <div className={header ? 'header fixed' : 'header'}>
    <div className='container'>
      <div className='row'>
      <div className='col-4'>
      <div className='logo' data-aos="fade" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine">
             <Link to='/'><img src={Logo} alt='Satya Group'/> </Link>
          </div>
        </div>
        <div className='col-8 a-center d-flex align-items-end justify-content-end'>
        <div className='navbar'>
            <div className={menus ? 'menus' : 'menus active'} >
              <ul className='d-flex align-items-center toplinks' data-aos="fade" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine">
                <li><a href ='/projects/residential'>Residential</a></li>
                <li><a href='/projects/commercial'>Commercial</a></li>
                <li><a href='/projects/hospitality'>Hospitality</a></li>
                <li className='btnfill button-2' onClick={handleToggle1}><span>Enquire Now</span></li>
                <li><button onClick={handleToggle} className="hemburgur"><span></span><span></span><span></span></button></li>
              </ul>
              {/* Enquire Form */}
              <div className={enquirefrm ? 'enquirefrm' : 'enquirefrm active'}>
                <div class="enquirecontainer">
                  <span class="enquirecross" onClick={handleToggle1}>X</span>
                  <h2>Request A Call Back</h2>
                  <ul>
                    <li><input type="text" placeholder="Name *" name='user_name' id='user_name' required value={user_name} onChange={(e) => setusername(e.target.value)}/></li>
                    <li><input type="email" placeholder="Email *" name='user_email' id='user_email' required value={user_email}  onChange={(e) => setuseremail(e.target.value)}/></li>
                    <li><input type="tel" placeholder="Phone Number *" name='user_phone' id='user_phone' required value={user_phone} onChange={(e) => setuserphone(e.target.value)}/></li>
                  </ul>
                <button type="submit" class="btnfill button-2" onClick={handleSubmit}><span id="submit_button_text">Submit</span></button>
                </div>
                </div>
              {/* Enquire Form */}
              <div className='menuslide'>
                <div className='togmenu'>
                  <span onClick={handleToggle} className='cross'>X</span>
                <ul>
              <li><NavLink to='/' exact activeClassName="active_class">Home</NavLink></li>
              <li><NavLink to='/about-satya' exact activeClassName="active_class">About Us</NavLink></li>
              <li><a href='/our-projects' exact activeClassName="active_class">Projects</a></li>
              <li><NavLink to='/career' exact activeClassName="active_class">Career</NavLink></li>
              <li><NavLink to='/media' exact activeClassName="active_class">Media</NavLink></li>
              <li><NavLink to='/NRI-Corner' exact activeClassName="active_class">NRI Corner</NavLink></li>
              {/* <li><NavLink to='/faq' exact activeClassName="active_class">Faq</NavLink></li> */}
              <li><NavLink to='/contact-us' exact activeClassName="active_class">Contact Us</NavLink></li>
              </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
  </header>
  )
}
export default Header;