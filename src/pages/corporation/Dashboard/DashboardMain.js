import React from 'react';
import styled from 'styled-components';
import mainImg from '../../../images/dashboard/corp-dashboard1.jpg'

const DashboardWrap = styled.div`
    max-width:1100px;
    width:1100px;
    display: inline-block;
    position: relative;
    height: calc(100vh - 50px);
    background: url(${mainImg}) center bottom / cover no-repeat rgb(179, 215, 240) ;
    >div{
        width: 1000px;
        margin: auto;
        position:relative;
        height: 100%;
    }
`;
const IntroContent = styled.div`
    margin-left: 100px;
    display: inline-flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    color: rgb(0, 0, 0);
    height: 100%;
    position: relative;
`;
const IntroTitle = styled.p`
    font-size: 48px;
    line-height: 1.29;
    font-weight: bold;
    margin-bottom: 20px;
`;
const IntroSubTitle = styled.p`
    font-size: 18px;
    line-height: 1.56;
    font-weight: 500;
    margin-bottom: 42px;
`;
const RoundButton = styled.button`
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border: 0px;
    border-radius: 9999px;
    background-color: rgb(51, 102, 255);
    font-weight: bold;
    text-align: center;
    color: rgb(255, 255, 255);
    min-width: 230px;
    height: 64px;
    font-size: 20px;
`;

const DashboardMain = () => {
    return (
        <DashboardWrap>
            <div>
                <IntroContent>
                    <IntroTitle>
                        딱 맞는 인재부터 <br/> 숨겨진 인재까지
                    </IntroTitle>
                    <IntroSubTitle>
                        혁신적 채용 경험의 시작, 하이어잇
                    </IntroSubTitle>
                    <div>
                        <RoundButton>
                            지금 시작하기
                        </RoundButton>
                    </div>
                </IntroContent>
            </div>
        </DashboardWrap>
    );
};

export default DashboardMain;