import React, { useEffect, useState } from "react";
import "./post.css";
import PostCard from "../../../components/postCard/PostCard";
import postPlaceHolder from "../../../assets/post.svg";
import SkeletonLoader from "../../../components/loader/SkeletonLoader";
import { useNavigate } from "react-router-dom";
import { getUserPost } from "../../../apis/api";
function Post({ userDetails }) {
  const [isOpenFilter, setisOpenFilter] = useState(false);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [postLists, setPostLists] = useState([]);

  const nav = useNavigate();
  const getPosts = async () => {
    try {
      setIsPostLoading(true);
      const res = await getUserPost(userDetails.email);
      console.log({ res });
      if (res.status) {
        setPostLists(res.result);
      }
    } catch (error) {
    } finally {
      setIsPostLoading(false);
    }
  };
  useEffect(() => {
    getPosts();
    return () => {};
  }, []);
  return (
    <div>
      <div className="postContainer">
        <div className="topBar">
          <div className="typeContent">
            <h2>All ({postLists.length})</h2>
          </div>
          <div className="postCTA">
            <button
              onClick={() => {
                nav("/post/edit");
              }}
            >
              New post
            </button>
            <div className="filterBox">
              <div
                className="mindBridgeFilter"
                onClick={() => {
                  setisOpenFilter((prevData) => !prevData);
                }}
              >
                <div className="filterText">Filter</div>
                <div className="filterNumber">0</div>
                <div className="selector">
                  <svg
                    width="8"
                    height="20"
                    viewBox="0 0 8 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isOpenFilter ? (
                      <path
                        d="M0.073724 12.3232L3.4702 15.7197C3.56783 15.8173 3.72612 15.8173 3.82375 15.7197L7.22014 12.3232C7.37764 12.1657 7.26614 11.8964 7.04334 11.8964H0.250504C0.0277738 11.8964 -0.083766 12.1657 0.073724 12.3232Z"
                        fill="black"
                      />
                    ) : (
                      <>
                        <path
                          d="M0.073724 12.3232L3.4702 15.7197C3.56783 15.8173 3.72612 15.8173 3.82375 15.7197L7.22014 12.3232C7.37764 12.1657 7.26614 11.8964 7.04334 11.8964H0.250504C0.0277738 11.8964 -0.083766 12.1657 0.073724 12.3232Z"
                          fill="black"
                        />

                        <path
                          d="M0.073724 8.46966L3.4702 5.07322C3.56783 4.97559 3.72612 4.97559 3.82375 5.07322L7.22014 8.46966C7.37764 8.62716 7.26614 8.89644 7.04334 8.89644H0.250504C0.0277738 8.89644 -0.083766 8.62715 0.073724 8.46966Z"
                          fill="black"
                        />
                      </>
                    )}
                  </svg>
                </div>
              </div>
              {isOpenFilter && (
                <div className="optionMenu">
                  <div className="filterOption-single status">
                    <input className="checkbox" type="checkbox" />
                    <div className="filterOptionText">Status</div>
                  </div>
                  <hr />
                  <div className="filterOption-double">
                    <div className="statusOption marginbottom-8">
                      <input className="checkbox" type="checkbox" />
                      <div className="filterOptionText">Shared</div>
                    </div>
                    <div className="statusOption">
                      <input className="checkbox" type="checkbox" />
                      <div className="filterOptionText">Drafts</div>
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
              {postLists.map((data) => {
                return (
                  <PostCard
                    title={data.title}
                    createdTime={data.createdTime}
                    description={data.subTitle}
                    imgUrl={data.thumbnailUrl}
                    id={data._id}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
