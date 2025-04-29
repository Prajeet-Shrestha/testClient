import React, { useState } from "react";
import "./searchResult.css";
function SearchResult() {
  const [isShowMenu, setisShowMenu] = useState(false);
  return (
    <div className='search-result-container'>
      <div className='navContainer'>
        <div className='sr-navbar'>
          <a className='logo' href='https://primate.health'>
            <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M0 0H30V30H0V15.01H7.5V22.5H22.5V7.5H0V0Z' fill='black' />
            </svg>
          </a>

          <div className='sr-search-bar'>
            <span className='textBox'>
              <input type='text' name='' id='searchBox' />
            </span>
            <span className='cancelBtn'>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z' fill='black' fillOpacity='0.6' />
              </svg>
            </span>
            <div className='vLine'></div>
            <span className='searchBtn'>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z'
                  fill='black'
                  fillOpacity='0.8'
                />
              </svg>
            </span>
          </div>
          <div className='box'>
            <div className='feedback clickable'>Feedback?</div>

            <div className='menuIcon'>
              <div className='clickable MenuSVG'>
                {isShowMenu == false ? (
                  <svg
                    onClick={() => {
                      setisShowMenu(true);
                    }}
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z' fill='black' />
                  </svg>
                ) : (
                  <svg
                    onClick={() => {
                      setisShowMenu(false);
                    }}
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z' fill='black' />
                  </svg>
                )}
              </div>

              {isShowMenu ? (
                <div className='dropdownOption'>
                  <div className='menuOption'>
                    <div className='menuItem home clickable'>Sign in</div>
                    <div className='menuItem help clickable'>Help</div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className='sr-navbar-mobile'>
          <div className='ctaBar'>
            <div className='sr-mobile-logo'>
              <div className='sr-mobile-Icon'>
                <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M0 0H30V30H0V15.01H7.5V22.5H22.5V7.5H0V0Z' fill='black' />
                </svg>
              </div>
              <div className='sr-mobile-MindBridgeName'>MindBridge</div>
            </div>
            <div className='sr-mobileMenu'>
              <svg width='24' height='30' viewBox='0 0 24 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M3 21H21V19H3V21ZM3 16H21V14H3V16ZM3 9V11H21V9H3Z' fill='black' />
              </svg>
            </div>
          </div>
          <div className='sr-mobileSearchBar'>
            <span className='sr-mobile-textBox'>
              <input type='text' name='' id='searchBar-mobile' />
            </span>

            <span className='sr-mobile-searchBtn'>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z'
                  fill='black'
                  fillOpacity='0.8'
                />
              </svg>
            </span>
            {/* <!-- <input type="text" id="searchBar-mobile" /> --> */}
          </div>
        </div>
      </div>
      <div className='resultMainPage'>
        <div className='filterSection'>
          <div className='allRegion'>
            <span className='text'> All regions </span>
            <span className='icon'>
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M5.83301 8.33325L9.99967 12.4999L14.1663 8.33325H5.83301Z' fill='black' fillOpacity='0.6' />
              </svg>
            </span>
          </div>
          <div className='allRegion'>
            <span className='text'> Any time </span>
            <span className='icon'>
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M5.83301 8.33325L9.99967 12.4999L14.1663 8.33325H5.83301Z' fill='black' fillOpacity='0.6' />
              </svg>
            </span>
          </div>
        </div>
        <div className='suggestionResult'>
          <span className='text'>Including results for </span> <span></span>
          <span className='suggestion'> search text </span>
        </div>
        <div className='suggestionResult searchOnly'>
          <span className='text'>Including results for </span> <span></span>
          <span className='suggestion'> search text </span>
        </div>
        <div>
          <div className='sr-results'>
            {/* <app-search-result-post-card
          [id]="data.id"
          [authorName]="data.authorName"
          [createddate]="data.createddate"
          [description]="data.description"
          [title]="data.title"
          [votes]="data.votes"
          [authorPostLink]="data.postLink"
          [img]="data.img"
        ></app-search-result-post-card> */}
          </div>
        </div>
        {/* <div  className="result-sk-container">
      <div style="width: 300px; height: 20px; margin-left: 20px; margin-top: 30px">
        <app-skeleton [box]="true"></app-skeleton>
      </div>
      <div style="width: 300px; height: 20px; margin-left: 20px; margin-top: 10px">
        <app-skeleton [box]="true"></app-skeleton>
      </div>
      <div *ngFor="let post of [1, 2, 3, 4]">
        <app-post-card [isSkeleton]="true"></app-post-card>
      </div>
    </div> */}
      </div>
      <div className='sr-footerMain'>{/* <app-footer></app-footer> */}</div>

      {/* <!-- <div className="sr-footerContainer">
    <div className="sr-bottomFooter">
      <div className="WOP">
        <span className="pBlue">
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3H14V17H0V10.0047H3.5V13.5H10.5V6.5H0V3Z" fill="#1C68FC" />
          </svg>
        </span>
        <span className="sr-bf-text"> Write on MindBridge </span>
      </div>
      <div className="sr-footerBox">
        <div className="sr-footerCTA">Terms</div>
        <div className="sr-footerCTA">Privacy</div>
        <div className="sr-footerCTA">Help</div>
      </div>
    </div>
  </div> --> */}
    </div>
  );
}

export default SearchResult;
