import React from "react";
import "./postCard.css";
import { FaEdit, FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function PostCard({
  imgUrl,
  draft = false,
  title = "Untitled",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis, sapien ac egestas ultricies, metus odio vehicula nulla.",
  createdTime = new Date().getTime(),
  id = 0,
}) {
  const nav = useNavigate();
  const formatcreatedTime = (createdTime, getDate = true, getTime = true) => {
    const month = new Date(createdTime).toLocaleString("default", {
      month: "short",
    });
    const date = new Date(createdTime).getDate();
    const year = new Date(createdTime).getFullYear();
    const time = new Date(createdTime).toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
    const currentYear = new Date().getFullYear();
    let returnFormat = "";
    if (year < currentYear) {
      if (getDate) {
        returnFormat =
          month.toString() + " " + date.toString() + " on " + year.toString();
      } else {
        returnFormat = month.toString() + " " + " on " + year.toString();
      }
    } else {
      if (getTime) {
        returnFormat =
          month.toString() + " " + date.toString() + " at " + time.toString();
      } else {
        returnFormat = month.toString() + " " + date.toString();
      }
    }
    return returnFormat;
  };
  return (
    <div>
      <div className="card">
        <div className="img">
          <img src={imgUrl} />

          {draft ? "Draft" : ""}
        </div>
        <div className="body">
          <div className="titleHandler">
            <h3>{title}</h3>
          </div>
          <p className="Pbody">{description}</p>
          <div className="bottom">
            <div className="leftBottom">
              <div className="date">
                <p>{formatcreatedTime(createdTime)}</p>
              </div>
            </div>
            <FaRegEdit
              className="rightBottom"
              onClick={(e) => {
                nav(`/post/edit/${id}`);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
