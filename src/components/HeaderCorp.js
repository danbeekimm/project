import React, { useContext } from 'react';
import './corpCommon.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { LoginContext } from '../contexts/LoginContext';

const HeaderCorp = () => {
    const {corpLogin} = useContext(LoginContext);

    return (
        <div className='corp-header-wrap'>
            <div className="corp-header-container">
                <div className="corp-header-nav-home-wrap">
                    <a href="" className="corp-header-nav-home">
                        하이어잇 기업 서비스
                    </a>
                </div>
                <div className="corp-header-nav-buttons-wrap">
                    <div className="corp-login-signup">
                        {corpLogin?<a href="" className='corp-login-sign'>로그아웃</a>:<><a href="" className="corp-login corp-login-sign">
                            채용담당자 로그인
                        </a>
                        <a href="" className="corp-signup corp-login-sign">
                            관리자 가입
                        </a></>}
                    </div>
                    {/* <div className="divider"></div> */}
                    <button className="corp-home-button">
                        {/* <Chip label="하이어잇 홈" variant="outlined" /> */}
                        <a style={{color:'black'}} href="/">하이어잇 홈</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderCorp;