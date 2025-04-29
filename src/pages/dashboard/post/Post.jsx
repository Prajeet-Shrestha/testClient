import React, { useState } from "react";
import "./post.css";
import PostCard from "../../../components/postCard/PostCard";
import postPlaceHolder from "../../../assets/post.svg";
import SkeletonLoader from "../../../components/loader/SkeletonLoader";
import { useNavigate } from "react-router-dom";
function Post() {
  const [isOpenFilter, setisOpenFilter] = useState(false);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const nav = useNavigate();
  return (
    <div>
      <div className='postContainer'>
        <div className='topBar'>
          <div className='typeContent'>
            <h2>All (3)</h2>
          </div>
          <div className='postCTA'>
            <button
              onClick={() => {
                nav("/post/edit");
              }}>
              New post
            </button>
            <div className='filterBox'>
              <div
                className='mindBridgeFilter'
                onClick={() => {
                  setisOpenFilter((prevData) => !prevData);
                }}>
                <div className='filterText'>Filter</div>
                <div className='filterNumber'>0</div>
                <div className='selector'>
                  {/* <svg width='18' height='20' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M5.25 8.5L9 12.25L12.75 8.5H5.25Z' fill='black' />
                  </svg> */}

                  <svg width='8' height='20' viewBox='0 0 8 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    {isOpenFilter ? (
                      <path
                        d='M0.073724 12.3232L3.4702 15.7197C3.56783 15.8173 3.72612 15.8173 3.82375 15.7197L7.22014 12.3232C7.37764 12.1657 7.26614 11.8964 7.04334 11.8964H0.250504C0.0277738 11.8964 -0.083766 12.1657 0.073724 12.3232Z'
                        fill='black'
                      />
                    ) : (
                      <>
                        <path
                          d='M0.073724 12.3232L3.4702 15.7197C3.56783 15.8173 3.72612 15.8173 3.82375 15.7197L7.22014 12.3232C7.37764 12.1657 7.26614 11.8964 7.04334 11.8964H0.250504C0.0277738 11.8964 -0.083766 12.1657 0.073724 12.3232Z'
                          fill='black'
                        />

                        <path
                          d='M0.073724 8.46966L3.4702 5.07322C3.56783 4.97559 3.72612 4.97559 3.82375 5.07322L7.22014 8.46966C7.37764 8.62716 7.26614 8.89644 7.04334 8.89644H0.250504C0.0277738 8.89644 -0.083766 8.62715 0.073724 8.46966Z'
                          fill='black'
                        />
                      </>
                    )}
                  </svg>
                </div>
              </div>
              {isOpenFilter && (
                <div className='optionMenu'>
                  <div className='filterOption-single status'>
                    <input className='checkbox' type='checkbox' />
                    <div className='filterOptionText'>Status</div>
                  </div>
                  <hr />
                  <div className='filterOption-double'>
                    <div className='statusOption marginbottom-8'>
                      <input className='checkbox' type='checkbox' />
                      <div className='filterOptionText'>Shared</div>
                    </div>
                    <div className='statusOption'>
                      <input className='checkbox' type='checkbox' />
                      <div className='filterOptionText'>Drafts</div>
                    </div>
                    <hr />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          {isPostLoading ? (
            <div>
              <SkeletonLoader height={"150px"} width={"98%"} />
              <SkeletonLoader height={"150px"} width={"98%"} />
              <SkeletonLoader height={"150px"} width={"98%"} />
            </div>
          ) : (
            <div>
              <PostCard imgUrl={postPlaceHolder} />
              <PostCard imgUrl={postPlaceHolder} />
              <PostCard imgUrl={postPlaceHolder} />
              <PostCard imgUrl={postPlaceHolder} />
              <PostCard imgUrl={postPlaceHolder} />
              <PostCard imgUrl={postPlaceHolder} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
