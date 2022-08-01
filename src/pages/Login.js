import React, { useState } from "react";
// import "./Login.scss";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../assets/image/logo.png";
import { GoogleLogin } from 'react-google-login';
import AuthPage from "./AuthPage";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errormsg, setErrormsg] = useState('');
    const nav=useNavigate();

    const signIn = (e) => {
        e.preventDefault();

        const url=`${process.env.REACT_APP_SPRING_URL}api/authenticate`;
        axios.post(url, {username, password})
        .then(res => {
            if (res.data===0) {
                alert("아이디 또는 비밀번호가 맞지 않습니다");
            } else {
                console.log(res.data.token);
                nav(-1);
            }
        }).catch(error => {
            setErrormsg('아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.');
        })
    }

    const responseGoogle = (response) => {
        console.log(response);
      }

    return(
        <div className="container">
            <div className="loginLogo">
                <img alt="" src={img} onClick={() => {nav("/")}}/>
            </div>

            <ul className="links">
                <li className="signin1">
                    <NavLink to="/login" id="signin1">SIGN IN</NavLink>
                </li>
                <li className="signup1">
                    <NavLink to="/signup" id="signup1">SIGN UP</NavLink>
                </li>
            </ul>

            <form action="" method="post">
                <div className="first-input input__block first-input__block">
                    <input type="text" placeholder="ID / Email" className="input" id="username" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="input__block">
                    <input type="password" placeholder="Password" className="input" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="error">
                    {errormsg}
                </div>
                <button className="signin__btn" onClick={signIn}>
                    Sign In
                </button>
            </form>
            <div className="separator">
                <p>OR</p>
            </div>
            <button className="google__btn">
                <i className="fa fa-google"></i>
                Sign in with Google
            </button>
            <AuthPage/>
            <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    render={renderProps => (
      <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
            <button className="github__btn">
                <i className="fa fa-github"></i>
                Sign in with GitHub
            </button>
        </div>
    )
}

export default Login;