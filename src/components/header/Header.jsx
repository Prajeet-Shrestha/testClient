import React from "react";
import "./header.css";
function Header() {
  return (
    <div className='headerContainer'>
      <div className='mindBridgeMainContainer header'>
        <div className='brand'>
          <div className='iconMindBridge'>
            <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M0 0H30V30H0V15.01H7.5V22.5H22.5V7.5H0V0Z' fill='black' />
            </svg>
          </div>
          <div className='brandName'>MindBridge</div>
          <div className='search'>
            <input placeholder='Search MindBridge' name='' id='searchInput' />

            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z'
                fill='#959DA5'
              />
            </svg>
          </div>
        </div>
        {/* <!-- <div className="desktop" *ngIf="!userLandingPage">
      <div className="loginBtn" (click)="redirectToSignin()">Login</div>
    </div> --> */}
        <div className='desktop'>
          {/* <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="black" />
      </svg> */}
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z' fill='black' />
          </svg>
        </div>
        {/* <!-- <div className="menu mobile" (click)="toggleMenu()">
      <svg *ngIf="!menuState" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="black" />
      </svg>
      <svg *ngIf="menuState" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          fill="black"
        />
      </svg>
    </div> --> */}
      </div>
      {/* <div className='dropdownOption mindBridgeMainContainer'>
        <div className='menuOption'>
          <div className='menuItem'>Login</div>
          <div className='menuItem'>Help</div>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
