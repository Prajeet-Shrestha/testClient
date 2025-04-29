import React from "react";
import "./postCard.css";
function PostCard({
  imgUrl,
  draft = false,
  title = "Untitled",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis, sapien ac egestas ultricies, metus odio vehicula nulla.",
  createdDate = "May 13 at 11:54 am",
  votes = 0,
}) {
  return (
    <div>
      <div className='card'>
        <div className='img'>
          <img src={imgUrl} />

          {draft ? "Draft" : ""}
        </div>
        <div className='body'>
          <div className='titleHandler'>
            <h3>{title}</h3>
          </div>
          <p className='Pbody'>{description}</p>
          <div className='bottom'>
            <div className='leftBottom'>
              <div className='date'>
                <p>{createdDate}</p>
              </div>
              <div className='vote'>
                <svg className='upVote clickable' width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M0.666992 5.99996L1.60699 6.93996L5.33366 3.21996V11.3333H6.66699V3.21996L10.387 6.94663L11.3337 5.99996L6.00033 0.666626L0.666992 5.99996Z'
                    fill='black'
                    fillOpacity='0.6'
                  />
                  <path d='M0.666504 6.00002L1.6065 6.94002L5.33317 3.22002V11.3334H6.6665V3.22002L10.3865 6.94669L11.3332 6.00002L5.99984 0.666687L0.666504 6.00002Z' fill='white' />
                </svg>

                <div className='voteText'>
                  <p>{votes}</p>
                </div>

                <svg className='downVote clickable' width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M11.333 6.00004L10.393 5.06004L6.66634 8.78004L6.66634 0.666708L5.33301 0.666709L5.33301 8.78004L1.61301 5.05338L0.666341 6.00004L5.99967 11.3334L11.333 6.00004Z'
                    fill='black'
                    fillOpacity='0.6'
                  />
                </svg>
              </div>
              <div className='views'>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8.00033 3.99996C10.527 3.99996 12.7803 5.41996 13.8803 7.66663C12.7803 9.91329 10.527 11.3333 8.00033 11.3333C5.47366 11.3333 3.22033 9.91329 2.12033 7.66663C3.22033 5.41996 5.47366 3.99996 8.00033 3.99996ZM8.00033 2.66663C4.66699 2.66663 1.82033 4.73996 0.666992 7.66663C1.82033 10.5933 4.66699 12.6666 8.00033 12.6666C11.3337 12.6666 14.1803 10.5933 15.3337 7.66663C14.1803 4.73996 11.3337 2.66663 8.00033 2.66663ZM8.00033 5.99996C8.92033 5.99996 9.66699 6.74663 9.66699 7.66663C9.66699 8.58663 8.92033 9.33329 8.00033 9.33329C7.08033 9.33329 6.33366 8.58663 6.33366 7.66663C6.33366 6.74663 7.08033 5.99996 8.00033 5.99996ZM8.00033 4.66663C6.34699 4.66663 5.00033 6.01329 5.00033 7.66663C5.00033 9.31996 6.34699 10.6666 8.00033 10.6666C9.65366 10.6666 11.0003 9.31996 11.0003 7.66663C11.0003 6.01329 9.65366 4.66663 8.00033 4.66663Z'
                    fill='#959DA5'
                  />
                </svg>
                <div className='viewText'>
                  <p>12</p>
                </div>
              </div>
            </div>
            <div className='rightBottom'>
              <svg className='edit clickable' width='13' height='12' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M7.37333 4.01333L7.98667 4.62667L1.94667 10.6667H1.33333V10.0533L7.37333 4.01333ZM9.77333 0C9.60667 0 9.43333 0.0666666 9.30667 0.193333L8.08667 1.41333L10.5867 3.91333L11.8067 2.69333C12.0667 2.43333 12.0667 2.01333 11.8067 1.75333L10.2467 0.193333C10.1133 0.06 9.94667 0 9.77333 0ZM7.37333 2.12667L0 9.5V12H2.5L9.87333 4.62667L7.37333 2.12667Z'
                  fill='black'
                  fillOpacity='0.6'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/*<div className='card skeleton-card'>
        <div className='sk-img'> <app-skeleton [image]="true"></app-skeleton> </div>
        <div className='sk-body body'>
           <app-skeleton [title]="true"></app-skeleton> 
          <div style='margin-top: 10px'> <app-skeleton [description]="true"></app-skeleton> </div>
          <div style='margin-top: 12px; display: flex; align-items: center'>
            <div style='width: 253px; margin-right: 24px'> <app-skeleton [paragraph]="true"></app-skeleton> </div>
            <div style='width: 44px'> <app-skeleton [paragraph]="true"></app-skeleton></div>
          </div>
        </div>
      </div>*/}
    </div>
  );
}

export default PostCard;
