import React, {useState, useEffect} from 'react'
import { Accordion, AccordionItem } from 'react-light-accordion';
import { Link } from 'react-router-dom';
import axios from 'axios';
var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

function createMarkup(content) {
    return {__html: decodeHTML(content)};
  }
export const Sitemap = () => {
    const [pagedata, setPagedata] = useState([]);
    useEffect(() => {
      let mounted = true;
      const loadData = async () => {
         const response = await axios.get('https://www.satyagroups.in/api/projects_cat.php');
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
  return (
    <>
    
    <div className='sitemap'>
          <div className='container'>
    <Accordion atomic={true}>
 
      <AccordionItem title="Sitemap">
      <div>
        <div className='sitemaprow'>
            <div className='sitemapbox'>
                <h3>Social Media</h3>
                <ul>
                    <li><a href='https://www.facebook.com/satyadevelopers' target="_blank"><i className='fa fa-facebook'></i><span>Facebook</span></a></li>
                    <li><a href='https://www.instagram.com/satya.developers/' target="_blank"><i className='fa fa-youtube'></i><span>Instagram</span></a></li>
                    <li><a href='https://twitter.com/satyadevelopers' target="_blank"><i className='fa fa-twitter'></i><span>Twitter</span></a></li>
                    <li><a href='https://www.youtube.com/channel/UCAjl0zI9RTWImeTcviIpsvA' target="_blank"><i className='fa fa-youtube'></i><span>Youtube</span></a></li>
                </ul>
            </div>
            <div className='sitemapbox'>
                <h3>About us</h3>
                <ul>
                    <li><Link to='/about-satya'><i className='fa fa-angle-double-right'></i>Satya Developers</Link></li>
                    <li><a href='about-satya#ourethos'><i className='fa fa-angle-double-right'></i>Vision Mission</a></li>
                </ul>
            </div>
            <div className='sitemapbox'>
                <h3>Projects</h3>
                <Accordion atomic={true}> 
                {pagedata.projectscat.Homes?
      <AccordionItem title="Homes">
                <ul>
                    {pagedata.projectscat.Homes.map(proVal=>(
                    <li><a href={'/project/' + proVal.slug}><i className='fa fa-angle-double-right'></i>{proVal.title}</a></li>
                    ))}
                    </ul>
      </AccordionItem>
      : null}
      {pagedata.projectscat.Retail?
      <AccordionItem title="Retail">
                <ul>
                    {pagedata.projectscat.Retail.map(proVal2=>(
                    <li><a href={'/project/' + proVal2.slug}><i className='fa fa-angle-double-right'></i>{proVal2.title}</a></li>
                    ))}
                    </ul>
      </AccordionItem>
      : null}
      {pagedata.projectscat.Offices?
      <AccordionItem title="Offices">
                <ul>
                    {pagedata.projectscat.Offices.map(proVal3=>(
                    <li><a href={'/project/' + proVal3.slug}><i className='fa fa-angle-double-right'></i>{proVal3.title}</a></li>
                    ))}
                    </ul>
      </AccordionItem>
      : null}
      </Accordion>
            </div>
            <div className='sitemapbox'>
                    <h3>Top Links</h3>
                    <ul>
                        <li><Link to='/career'>Career</Link></li>
                        <li><Link to='/media'>Media</Link></li>
                        <li><Link to='/NRI-Corner'>NRI Corner</Link></li>
                        <li><Link to='/contact-us'>Contact Us</Link></li>
                    </ul>
            </div>
        </div>
  </div>
      </AccordionItem>
 
    </Accordion>
    </div>
    </div>
    </>
  )
}
