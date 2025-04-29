import React, { useState, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Import Quill styles

import "./postEditor.css";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../../apis/api";

function PostEditor({ userDetails }) {
  const editorRef = useRef(null);
  const quillInstance = useRef(null);
  const [isShowEditor, setisShowEditor] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [keywords, setKeyWords] = useState("");
  const [imageUrl, setImageUrl] = useState("https://t4.ftcdn.net/jpg/08/09/09/83/360_F_809098361_z45jKPDGsYymmTJcFQvp3VGTPgGuY35L.jpg");
  const nav = useNavigate();

  useEffect(() => {
    console.log({ editorRef: editorRef.current });
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Write something...",
        modules: {
          toolbar: true,
        },
      });
    }

    return () => {};
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    let editorContent = "";
    if (quillInstance.current) {
      editorContent = quillInstance.current.root.innerHTML;
    }
    const postData = {
      title,
      imageUrl,
      subTitle,
      editorContent,
      keywords,
      name: userDetails.name,
      email: userDetails.email,
      content: editorContent,
      date: new Date().toISOString(),
    };
    const response = await createPost(title, imageUrl, subTitle, editorContent, keywords, userDetails.name, userDetails.email, userDetails.jwt);
    console.log({ response });
    console.log("Post Data:", postData);
  };

  return (
    <div>
      <div className={`cp-parent`}>
        <div>
          <div className='cp-header'>
            <div className='cp-header-mid cp-container'>
              <button
                className='cp-dashboardBtn'
                onClick={(e) => {
                  nav("/dashboard");
                }}>
                Dashboard
              </button>
            </div>
          </div>
          <form className='cp-body cp-container'>
            <textarea
              type='text'
              className='inputTitle max-width'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder='Enter Title'></textarea>
            <textarea
              type='text'
              className='inputSubTitle max-width'
              value={subTitle}
              onChange={(e) => {
                setSubTitle(e.target.value);
              }}
              placeholder='Enter subtitle'></textarea>
            <div className='customEditor'>
              <div ref={editorRef} style={{ height: "300px" }} />
            </div>
          </form>
          <div className='cp-footer'>
            <div className='cp-footer-mid cp-container'>
              <div className='cp-footer-mid-left'>
                <p>Last save</p>
                <p>March 2025</p>
              </div>
              <div className='cp-footer-mid-right'>
                <button
                  className='cp-settingBtn'
                  onClick={(e) => {
                    setisShowEditor(true);
                  }}>
                  Setting
                </button>
                <button
                  className='cp-postBtn'
                  onClick={(e) => {
                    handlePostSubmit(e);
                  }}>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShowEditor ? (
        <div className='cp-parent-setting'>
          <div className='cp-setting-header cp-container'>
            <h2 className='cp-setting-title'>Post Setting</h2>
            <div
              className='cp-setting-closeBtn'
              onClick={(e) => {
                setisShowEditor(false);
              }}>
              <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z' fill='black' />
              </svg>
            </div>
          </div>
          <div className='cp-setting-postPreview cp-container'>
            <div className='cp-setting-postPreviewTitle'>
              <h3 className='cp-setting-postPreviewText'>Featured image</h3>
              <button className='cp-setting-postPreviewEditBtn'>Edit</button>
            </div>
            <div className='cp-setting-postCard'>
              {imageUrl.length <= 0 ? (
                <div className='cp-setting-imgPlaceholder'>
                  <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M26.6667 3.33333V26.6667H3.33333V3.33333H26.6667ZM26.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V26.6667C0 28.5 1.5 30 3.33333 30H26.6667C28.5 30 30 28.5 30 26.6667V3.33333C30 1.5 28.5 0 26.6667 0ZM18.5667 14.7667L13.5667 21.2167L10 16.9L5 23.3333H25L18.5667 14.7667Z'
                      fill='black'
                      fillOpacity='0.12'
                    />
                  </svg>
                </div>
              ) : (
                <div className='cp-setting-imgUpload'>
                  <img id='editPostImg' src={imageUrl} />
                </div>
              )}
              <div className='cp-setting-postCard-body'>
                <h3 className='cp-setting-postCard-title'>{title}</h3>
                <p className='cp-setting-postCard-postBody'>{subTitle}</p>
                <p className='cp-setting-postCard-footer'>
                  <span className='cp-setting-postCard-author'> {userDetails.name} </span>
                  <span className='cp-setting-postCard-date'>May 13</span>
                </p>
              </div>
            </div>
            <div className='cp-setting-featuredPost-CTAs'>
              <input
                type='text'
                value={imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);
                }}
              />
            </div>
          </div>
          <div className='cp-setting-dangerZone cp-container'>
            <div className='cp-setting-dangerZone-header'>
              <h3 className='cp-setting-dangerZone-headerText'>Keywords seperated by ","</h3>
            </div>
            <textarea
              type='text'
              value={keywords}
              onChange={(e) => {
                setKeyWords(e.target.value);
              }}
            />
          </div>
          <div className='cp-setting-dangerZone cp-container'>
            <div className='cp-setting-dangerZone-header'>
              <h3 className='cp-setting-dangerZone-headerText'>Danger zone</h3>
            </div>
            <button className='cp-setting-dangerZone-deletePostCTA'>Delete post</button>
          </div>{" "}
        </div>
      ) : null}
    </div>
  );
}

export default PostEditor;
