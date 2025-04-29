import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className='sr-footerContainer'>
      <div className='sr-bottomFooter'>
        <div className='WOP'>
          <span className='pBlue'>
            <svg width='14' height='20' viewBox='0 0 14 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M0 3H14V17H0V10.0047H3.5V13.5H10.5V6.5H0V3Z' fill='#1C68FC' />
            </svg>
          </span>
          <span className='sr-bf-text'> Write on MindBridge </span>
        </div>
        <div className='sr-footerBox'>
          <div className='sr-footerCTA'>Terms</div>
          <div className='sr-footerCTA'>Privacy</div>
          <div className='sr-footerCTA'>Help</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
