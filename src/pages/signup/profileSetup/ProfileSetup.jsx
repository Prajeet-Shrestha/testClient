import React, { useState } from "react";
import error_outline from "../../../assets/error_outline.svg";
import "./profileSetup.css";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
function ProfileSetup({ setsignUpStepCount, description, setDescription, createAccount, errorMessage, isLoading }) {
  const nav = useNavigate();
  return (
    <div className='mindBridgeMainContainer'>
      <div className='step2'>
        <div className='signUpContainer'>
          <div className='title'>
            <h3>Setup your profile</h3>
          </div>
          <form className='form'>
            <div className='imgUpload'>
              <img src='https://avatar.iran.liara.run/public/68' />
              <input type='file' />
              <div className='underLine'>Prelisa Dahal</div>
            </div>
            <div className='formInputBox'>
              <div className='ForumEmail'>
                <p>Description</p>
                <textarea
                  minlength='1'
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  formControlName='description'
                  placeholder='Max 50 characters'
                />
              </div>
            </div>

            {errorMessage.length >= 1 && (
              <div className='invalidEmailErrorSection'>
                <img className='invalidEmailErrorSVG' src={error_outline} />

                <p>{errorMessage}</p>
              </div>
            )}
            {/* <div *ngIf="error.state.isDescription" className="invalidEmailErrorSection">
            <img className="invalidEmailErrorSVG" src="../../../../assets/error_outline.svg" />
  
            <p>Description should not be less then 10 words.</p>
          </div> */}

            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                type='button'
                disabled={description.length >= 1 && isLoading == false ? false : true}
                onClick={async (e) => {
                  try {
                    e.preventDefault(); // Prevent form submission
                    createAccount();
                  } catch (error) {}
                }}>
                {isLoading ? "Creating user.." : "Create account"}
              </button>{" "}
              <button
                className='white'
                type='button'
                disabled={isLoading}
                onClick={(e) => {
                  e.preventDefault(); // Prevent form submission
                  setsignUpStepCount(0);
                }}>
                {isLoading ? <Spinner animation='border' size='sm' className='spinner' variant='dark' /> : "Back"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetup;
