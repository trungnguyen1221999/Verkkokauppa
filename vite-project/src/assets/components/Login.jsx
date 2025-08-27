import React, { useState } from "react";
import { LuLogIn } from "react-icons/lu";
import styled from "styled-components";
import { HiOutlineAtSymbol } from "react-icons/hi";
import { LuKeyRound } from "react-icons/lu";
import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa6";
import { FaAd } from "react-icons/fa";
import { OVerLay } from "./ZipStore";
const Login = () => {
  const [isFocus, setFocus] = useState(false);
  const [isOpenLogin, setOpenLogin] = useState(false);
  return (
    <div>
      <StyledLogin onClick={() => setOpenLogin(true)}>
        <LuLogIn />
        <p>Log in</p>
      </StyledLogin>

      {isOpenLogin && (
        <OVerLay onClick={() => setOpenLogin(false)}>
          <StyledLoginPopup
            onClick={(e) => e.stopPropagation()}
            isOpenLogin={isOpenLogin}
          >
            <LoginForm isFocus={isFocus}>
              <a>
                <h3>Log in</h3>
              </a>
              <h4>Log in with your email address and password.</h4>
              <p className="info">
                Fields marked with an asterisk ({" "}
                <span className="required">*</span> ) are required.
              </p>
              <form action="">
                <label>
                  <div htmlFor="email">
                    <p className="mailpass">Email address</p>{" "}
                    <span className="required">*</span>
                  </div>
                  <div className="infowrap">
                    <HiOutlineAtSymbol />
                    <input
                      onFocus={() => setFocus(true)}
                      id="email"
                      type="email"
                      placeholder="firstname.lastname@example.com"
                      required
                    />
                  </div>
                </label>
                <label>
                  <div htmlFor="password">
                    <p className="mailpass">Password</p>{" "}
                    <span className="required">*</span>
                  </div>
                  <div className="infowrap">
                    <LuKeyRound />
                    <input
                      onFocus={() => setFocus(true)}
                      id="password"
                      type="password"
                      required
                    />
                  </div>
                </label>
                <button isFocus={isFocus} className="btn-login" type="submit">
                  Log in
                </button>
                <button className="btn-forgot">Forgot your password?</button>
              </form>
            </LoginForm>
            <LoginBy>
              <h3>Use an identification service</h3>
              <div>
                <div className="icon">
                  <ImFacebook2 />
                  <p>Facebook</p>
                </div>
                <div className="icon">
                  <FcGoogle />
                  <p>Google</p>
                </div>
                <div className="icon">
                  <FaMicrosoft />
                  <p>Microsoft</p>
                </div>
                <div className="icon">
                  <FaAd />
                  <p>AAD SSO</p>
                </div>
              </div>
              <a href="">Read more about identification services</a>
            </LoginBy>
            <hr />
            <a className="create" href="">
              Create an account
            </a>
            <p className="close" onClick={() => setOpenLogin(false)}>
              x
            </p>
          </StyledLoginPopup>
        </OVerLay>
      )}
    </div>
  );
};

export default Login;

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 5rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
  p {
    font-size: 1.3rem;
    font-weight: 600;
  }

  svg {
    margin-right: 0.5rem;
    scale: 1.3;
    opacity: 0.8;
  }
`;

const StyledLoginPopup = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: white;
  padding: 1rem;
  z-index: 19999 !important;
  width: 43rem;

  transform: ${({ isOpenLogin }) =>
    isOpenLogin ? "translateX(0)" : "translateX(100%)"}!important;
  transition: transform 1s ease-in-out !important;
  will-change: transform;
  hr {
    margin: 1.5rem 0;
    opacity: 0.85;
  }
  .create {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.cartBg};
    border: 1px solid ${({ theme }) => theme.colors.cartBg};
    background-color: white;
    border-radius: 5rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundAlt};
    }
  }
  .close {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    scale: 0.8;
    padding: 1rem;
    border-radius: 50%;
    &:hover {
      background-color: #ccc;
    }
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  label div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  svg {
    opacity: 0.5;
    scale: 0.9;
  }
  .required {
    color: red;
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  .info {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.silver};
  }
  .mailpass {
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
  }

  input {
    font-size: 1.35rem;
    width: 100%;
  }
  .infowrap {
    border: 1px solid ${({ theme }) => theme.colors.silver};
    padding: 1rem 0.5rem;
    border-radius: 0.5rem;
    &:hover {
      outline: 1px solid ${({ theme }) => theme.colors.cartBg};
    }
  }
  .btn-login {
    background-color: ${({ isFocus, theme }) =>
      isFocus ? theme.colors.cartBg : theme.colors.silver};
    color: white;
    margin-top: 0.5rem;
    font-size: 1.35rem;
    font-weight: 600;
    padding: 1.25rem;
    border: none;
    border-radius: 5rem;
    cursor: ${({ isFocus }) => (isFocus ? "pointer" : "not-allowed")};
    opacity: ${({ isFocus }) => (isFocus ? 0.9 : 0.5)};
    &:hover {
      opacity: ${({ isFocus }) => (isFocus ? 1 : 0.5)};
    }
    margin-bottom: 0.5rem;
  }
  .btn-forgot {
    width: fit-content;
    margin: 0 auto;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.2rem;
    border-radius: 5rem;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundAlt};
    }
  }
`;
const LoginBy = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  gap: 1rem;
  h3 {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    justify-content: space-between;
    padding: 0 1rem;
  }
  svg {
    scale: 1.2;
  }
  .icon {
    display: flex;
    flex-direction: column;
    p {
      font-size: 1.4rem;
    }
  }
  a {
    width: fit-content;
    margin: 1.5rem auto;
    font-size: 1.25rem;
    text-align: center;
    font-weight: 600;
    text-decoration: none;
    padding: 1rem;
    opacity: 0.8;
    background-color: #fff;
    border-radius: 5rem;
    &:hover {
      background-color: transparent;
    }
  }
`;
