import React, { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import insta_logo from '../images/instagram-logo.png'
import './common.css';

const Footer = () => {
    const {login} = useContext(LoginContext);
    return (
        <div className='footer-wrap' style={{fontFamily:'S-CoreDream-5Medium', fontSize:'14px',lineHeight:'1.42857143',color:'#333'}}>
            <div className='footer footer-top'>
                <div className='nav-links-wrap'>
                    <div className="nav-links-logo">
                        <img width='20' style={{marginRight:'10px'}} src={require('../images/hireit-logo-rect.png')} alt="" />
                        {/* <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=75" alt="" /> */}
                        <b>HIREiT</b>
                    </div>
                    <div className="nav-links-links">
                        <a href="#" target='_blank'>기업소개</a>
                        <a href="#" target='_blank'>이용약관</a>
                        <a href="#" target='_blank'>개인정보 처리방침</a>
                        <a href="#" target='_blank'>고객정보</a>
                    </div>
                </div>
            </div>
            <div className='footer footer-bottom-wrap'>
                <p className="footer-bottom-text">
                    (주)하이어잇 (대표이사:기강잡는 조장 박민우) | 서울특별시 강남구 | 통신판매번호:2020-서울강남-901
                    <br/>
                    유료직업소개사업등록번호:(국내) 제2022-0314901-90-1-220314호 | 
                    (국외) 서울남부-유-2022-3 | 사업자등록번호 : 901-03-220314 | 02-111-2222
                    <br/>
                    © HireItlab, Inc.
                </p>
                <div className="footer-bottom-locale-select">
                    <img width='24' src={require('../images/korean-flag.png')} alt="" />{/*  */}
                    <select name="" id="">
                        <option value="KR">한국 (한국어)</option>
                        <option value="CH">중국 (중국어)</option>
                        <option value="WW">Wordwide (English)</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Footer;