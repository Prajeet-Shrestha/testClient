import React, { useEffect, useState } from "react";
import "./signUp.css";
import error_outline from "../../assets/error_outline.svg";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import ProfileSetup from "./profileSetup/ProfileSetup";
import { createUser } from "../../apis/api";
function SignUpPage({ setisLoggedIn }) {
  const nav = useNavigate();
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signUpStepCount, setsignUpStepCount] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    return () => {
      setsignUpStepCount(0);
      setfirstName("");
      setEmail("");
      setLastName("");
      setPassword("");
      setDescription("");
    };
  }, []);

  const createAccount = async () => {
    console.log({ firstName, lastName, email, password, description });
    setisLoading(true);
    setErrorMessage("");
    try {
      const res = await createUser(firstName + " " + lastName, email, password, description);
      setisLoggedIn(true);
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(res.result.jwtToken));
      nav("/dashboard");
      console.log(res);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.toString());
    } finally {
      setisLoading(false);
    }
  };

  return (
    <>
      <Header />
      {signUpStepCount == 0 ? (
        <div className='mindBridgeMainContainer signUpMainContainer'>
          <div className='step1'>
            <div className='signUpContainer'>
              <div className='title'>
                <h2>Create an account</h2>
              </div>
              <form className='form'>
                <div className='formInputBox'>
                  <div className='ForumName'>
                    <input
                      type='text'
                      minlength='3'
                      value={firstName}
                      onChange={(e) => {
                        setfirstName(e.target.value);
                      }}
                      placeholder='Your first name'
                    />
                  </div>
                  <div className='ForumName'>
                    <input
                      type='text'
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      minlength='3'
                      placeholder='Your last name'
                    />
                  </div>
                </div>
                <div className='formInputBox'>
                  <div className='ForumEmail'>
                    <input
                      type='email'
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      email
                      placeholder='Your email address'
                    />
                  </div>
                </div>{" "}
                <div className='formInputBox'>
                  <div className='ForumEmail'>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder='Your password'
                    />
                  </div>
                </div>
                {/* <div className='invalidEmailErrorSection'>
              <img className='invalidEmailErrorSVG' src={error_outline} />

              <p>asdas</p>
            </div> */}
                {/* <!--  <div *ngIf="error.state.isEmail" className="invalidEmailErrorSection">
          <img className="invalidEmailErrorSVG" src="../../../../assets/error_outline.svg" />

          <p>Invalid email address</p>
        </div>
        <div  className="invalidEmailErrorSection">
          <img className="invalidEmailErrorSVG" src="../../../../assets/error_outline.svg" />

          <p>Last name is too short</p>
        </div>
        <div className="invalidEmailErrorSection">
          <img className="invalidEmailErrorSVG" src="../../../../assets/error_outline.svg" />

          <p>First name is too short</p>
        </div>
        <div  className="invalidEmailErrorSection">
          <img className="invalidEmailErrorSVG" src="../../../../assets/error_outline.svg" />

          <p>Accept the Terms of use</p>
        </div> --> */}
                {password.length >= 1 && (
                  <div
                    className='showPasswordCheckbox'
                    onClick={(e) => {
                      setShowPassword((p) => !p);
                    }}>
                    <input type='checkbox' checked={showPassword} formControlName='acceptToTOU' />
                    <span> Show Password</span>
                  </div>
                )}
                <button
                  disabled={firstName.length >= 1 && lastName.length >= 1 && email.length >= 1 && password.length >= 1 ? false : true}
                  type='button'
                  onClick={async (e) => {
                    try {
                      e.preventDefault(); // Prevent form submission
                      console.log({ firstName, lastName, email, password });
                      setsignUpStepCount(1);
                    } catch (error) {}
                  }}>
                  Continue
                </button>
              </form>
            </div>
            <div className='SignUpPageRedirect'>
              <p>
                Already have an account?{" "}
                <span
                  className='blue btn'
                  onClick={() => {
                    nav("/login");
                  }}>
                  Click here
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <ProfileSetup
          isLoading={isLoading}
          errorMessage={errorMessage}
          createAccount={createAccount}
          setsignUpStepCount={setsignUpStepCount}
          description={description}
          setDescription={setDescription}
        />
      )}
      <Footer />
    </>
  );
}

export default SignUpPage;
