import React from 'react'
import './footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div>
      <div className="Footer-wrap">
            <div className='Footer-first-section'>
              <div className='socialmedia'>
                <li><FacebookOutlinedIcon/></li>
                <li><InstagramIcon/></li>
                <li><SubscriptionsOutlinedIcon/></li>
              </div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
                <li>Service Code</li>
                <li>&#169; 1997-2024 Netflix Inc.</li>
              </ul>
            </div>
            <div className='Footer-second-section'>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cockie Preference</li>
              </ul>
            </div>
            <div className='Footer-third-section'>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div className='Footer-fourth-section'>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            
          </div>
    </div>
  )
}

export default Footer

