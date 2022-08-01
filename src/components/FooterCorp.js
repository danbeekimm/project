import React, { useContext } from 'react';



const FooterCorp = () => {

    return (
        <div className='corp-footer-wrap'>
            <div className="corp-footer-container">
                <div className="corp-footer-item">
                    <div className="corp-footer-links">
                    
                    </div>
                    <div className="corp-footer-country-icon-wrap">
                        <img width='24' src={require('../images/korean-flag.png')} alt="" className="country-icon" />
                        <span className="corp-footer-select-box">
                            <select name="" id="" className="corp-footer-select">
                                <option value="KR">한국 (한국어)</option>
                                <option value="CHN">중국 (중국어)</option>
                                <option value="JP">일본 (일본어)</option>
                            </select>
                        </span>
                    </div>
                </div>
                <div className="corp-footer-item">
                    <h5 className="corp-footer-desc">
                        <span>
                            서비스문의 : 02-123-4567, bit@bitcamp.com
                            <br />
                            © Hireitlab, Inc.
                        </span>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default FooterCorp;