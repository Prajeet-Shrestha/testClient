import React, { useEffect, useState } from "react";
import "./login.css";
import error_outline from "../../assets/error_outline.svg";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../apis/api";
import Spinner from "react-bootstrap/Spinner";

function Login({ setisLoggedIn }) {
  const nav = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, seterrorName] = useState("");
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    // const res = loginUser();

    return () => {};
  }, []);

  return (
    <>
      <Header />
      <div className='mindBridgeMainContainer'>
        <div className='loginWithPW'>
          <div className='signInFormControl'>
            <div className='title'>
              <h3>Login to your account</h3>
            </div>
            <form className='form'>
              <div className='formInputBox'>
                <div className='ForumEmail'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    placeholder='Your email address'
                  />
                </div>
              </div>
              <div className='formInputBox'>
                <div className='ForumEmail'>
                  <input
                    type='password'
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder='Your password'
                  />
                </div>
              </div>
              {errorName.length >= 1 && (
                <div className='invalidEmailErrorSection'>
                  <img className='invalidEmailErrorSVG' src={error_outline} />
                  <p>{errorName}</p>
                </div>
              )}
              <div className='buttonFlex'>
                <button
                  className='loginBtn'
                  type='button'
                  disabled={isLoading || email.length <= 0 || password.length <= 0}
                  onClick={async (e) => {
                    seterrorName("");
                    setisLoading(true);
                    try {
                      e.preventDefault(); // Prevent form submission
                      console.log({ email, password });
                      const res = await loginUser(email, password);
                      setisLoggedIn(true);
                      localStorage.removeItem("user");
                      localStorage.setItem("user", JSON.stringify(res.result.jwtToken));
                      nav("/dashboard");
                      console.log(res);
                    } catch (error) {
                      seterrorName(error.toString());
                    } finally {
                      setisLoading(false);
                    }
                  }}>
                  {isLoading ? "Verifying.." : "Login"}
                </button>
                {isLoading && <Spinner animation='border' size='sm' className='spinner' variant='dark' />}
              </div>
            </form>
          </div>
          <div className='SignUpPageRedirect'>
            <p>
              Looking to create an account?{" "}
              <span
                className='blue btn'
                onClick={() => {
                  nav("/signUp");
                }}>
                Click here
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
