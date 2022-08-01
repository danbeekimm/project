import React from "react";
import { useForm } from "react-hook-form";
// import "./SignUp.scss";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../assets/image/logo.png"
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

const SignUp = () => {
    const nav=useNavigate();
    const [idChecked, setIdChecked] = useState(0);

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const signUp = (data) => {
        const signUpUrl=`${process.env.REACT_APP_SPRING_URL}api/signup`;
        axios.post(signUpUrl, data)
        .then(res => {
            alert("가입 성공");
            nav("/login");
        }).catch(err => {
            alert("가입 실패");
        })
    }

    const username = watch("username");

    const idCheck = useCallback(() => {
        const idCheckUrl=`${process.env.REACT_APP_SPRING_URL}api/idcheck?username=${username}`;

        axios.get(idCheckUrl)
        .then(res => {
            setIdChecked(res.data);
        })
    }, [username])

    useEffect(() => {
        idCheck()
    }, [username, idCheck])

    return(
        <div className="container">
            <div className="loginLogo">
                <img alt="" src={img} onClick={() => {nav("/")}}/>
            </div>

            <ul className="links">
                <li className="signin2">
                    <NavLink to="/login" id="signin2">SIGN IN</NavLink>
                </li>
                <li className="signup2">
                    <NavLink to="/signup" id="signup2">SIGN UP</NavLink>
                </li>
            </ul>

            <form onSubmit={handleSubmit(signUp)}>
                <div className="first-input input__block second-input__block">
                    <input type="text" placeholder="ID / Email" className="input" id="username"
                    {...register("username", {
                        required: "아이디 혹은 이메일을 입력해주세요",
                        minLength: {
                            value: 4,
                            message: '4자 이상의 영문 혹은 숫자를 입력해주세요'
                        },
                        maxLength: {
                            value: 20,
                            message: '20자 이하의 영문 혹은 숫자를 입력해주세요'
                        },
                        pattern: {
                            value: /^([a-zA-Z])|([0-9])$/,
                            message: '영문과 숫자 아이디만 사용 가능합니다'
                        },
                        validate: value => idChecked === 0 || '이미 존재하는 아이디입니다'
                    })}/>
                </div>
                {errors.username && <p>{errors.username?.message}</p>}
                <div className="input__block">
                    <input type="text" placeholder="Name" className="input" id="name"
                    {...register("name", {
                        required: "이름을 입력해주세요",
                        minLength: {
                            value: 2,
                            message: "2자 이상의 한글 또는 영문을 입력해주세요",
                        },
                        maxLength: {
                            value: 16,
                            message: "16자 이하의 한글 또는 영문을 입력해주세요",
                        },
                        pattern: {
                            value: /^([가-힣])|([a-zA-Z])$/,
                            message: '한글 또는 영문 이름만 사용 가능합니다'
                        }
                    })}/>
                </div>
                {errors.name && <p>{errors.name?.message}</p>}
                <div className="input__block">
                    <input type="password" placeholder="Password" className="input" id="password"
                    {...register("password", {
                        required: "비밀번호를 입력해주세요",
                        minLength: {
                            value: 8,
                            message: "8자 이상의 영문+숫자를 입력해주세요",
                        },
                        maxLength: {
                            value: 16,
                            message: "16자 이하의 영문+숫자를 입력해주세요",
                        },
                        pattern: {
                            value: /^(?=.*\d)(?=.*[a-zA-ZS]).{8,16}/,
                            message: "영문+숫자를 혼합하여 입력해주세요",
                        }
                    })}/>
                </div>
                {errors.password && <p>{errors.password?.message}</p>}
                <div className="input__block">
                    <input type="password" placeholder="Repeat password" className="input repeat__password" id="repeat__password"
                    {...register("repeatPassword", {
                        required: "비밀번호를 다시 입력해주세요",
                        validate: value => value === watch("password") || '비밀번호가 일치하지 않습니다' 
                    })}/>
                </div>
                {errors.repeatPassword && <p>{errors.repeatPassword?.message}</p>}
                <div className="input__block">
                    <input type="text" placeholder="Nickname" className="input" id="nickname"
                    {...register("nickname", {
                        required: "닉네임을 입력해주세요",
                        maxLength: {
                            value: 15,
                            message: "15자 이하로 입력해주세요",
                        }
                    })}/>
                </div>
                {errors.nickname && <p>{errors.nickname?.message}</p>}
                <button type="submit" className="signin__btn">
                    Sign Up
                </button>
            </form>
            <div className="separator">
                <p>OR</p>
            </div>
            <button className="google__btn">
                <i className="fa fa-google"></i>
                Sign up with Google
            </button>
            <button className="github__btn">
                <i className="fa fa-github"></i>
                Sign up with GitHub
            </button>
        </div>
    )
}

export default SignUp;