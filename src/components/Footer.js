import React, {useState, useEffect, useRef} from 'react'
import { Copyright } from './Copyright';
import { Sitemap } from './Sitemap';
import axios from 'axios';
window.weburl = "https://www.satyagroups.in/";

var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

function createMarkup(content) {
    return {__html: decodeHTML(content)};
  }

export const Footer = () => {

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
      document.getElementById("submit_button_text").value='SUBMITTING...';
      const url = "https://www.satyagroups.in/api/insert_hook.php";
      let fData = new FormData();
      fData.append('user_name',user_name);
      fData.append('user_phone',user_phone);
      fData.append('user_email',user_email);
      fData.append('utm_url',window.location.href);
      fData.append('td_name','footer_enquiry');
      
      axios.post(url, fData)
      .then(response => alert(response.data))
      .catch(error => alert(error));
      console.log(true);
      document.getElementById("submit_button_text").value='SUBMIT';
      document.getElementById("user_name").value='';
      document.getElementById("user_phone").value='';
      document.getElementById("user_email").value='';
      return false;
    }
  }

  const [pagedata, setPagedata] = useState([]);
  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
       const response = await axios.get('https://www.satyagroups.in/api/contactus.php');
       if(mounted){
           setPagedata(response.data);
       }
    }

    loadData();

    return () => {
        mounted = false;
      };
}, []);

console.log(pagedata);

if (pagedata.length===0) {
    console.log('no data');
    return null;
}
let pagename = window.location.pathname;
  return (
    <>
    {(pagename!="/media" && pagename!="/events" && pagename!="/life-at-satya") ?
     <div className='racall'>
          <div className='container'>
            <div className='row'>
              <div className='web-container'>
              <div className='racallrow'>
                <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="100">
                  <h2>Request A call Back</h2>
                </div>
                <form action="#">
                <ul className='form d-flex flex-wrap justify-content-between' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="200">
                  <li><input type='text' placeholder='Name*' name='user_name' id='user_name' required value={user_name} onChange={(e) => setusername(e.target.value)}/></li>
                  <li><input type='tel' placeholder='Mobile No*' name='user_phone' id='user_phone' required value={user_phone} onChange={(e) => setuserphone(e.target.value)}/></li>
                  <li><input type='email' placeholder='Email*' name='user_email' id='user_email' required value={user_email}  onChange={(e) => setuseremail(e.target.value)}/></li>                  
                  <li><input type='submit' id="submit_button_text" value='submit' className='btnfill button-2' onClick={handleSubmit}/></li>
                </ul>
                </form>
              </div>
              </div>
            </div>
          </div>
        </div>
        : null}
           <footer>
          <div className='footer'>
            <div className='container'>
              <div className='row'>                
              <div className='web-container'>
                <div className='ftrrow d-flex justify-content-between' data-aos="fade" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="200">
                {pagedata.contact.map(careerdesc =>{
                      return <div className='ftr'>
                       <h2>{careerdesc.heading}</h2>
                       <div dangerouslySetInnerHTML={createMarkup(careerdesc.description)}></div>
                     </div>
                      })}
                      </div>
                  </div>
              </div>
            </div>
          </div>
       <Sitemap />
      <Copyright />
    </footer>
    </>
  )
}
