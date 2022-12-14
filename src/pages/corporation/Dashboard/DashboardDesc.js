import React from 'react';
import styled from 'styled-components';
import meet from '../../../images/dashboard/meet.jpg';
import win from '../../../images/dashboard/winwin.jpg';

const DescriptionWrap = styled.section`
    max-width: 1100px;
    width: 1100px;
    color: rgb(51, 51, 51);
    display: inline-block;
    background: rgb(255, 255, 255);
    >div{
        margin: auto;
        position: relative;
    }
    img{
        width: 500px;
        height: 400px;
    }
`;
const WelcomeSectionTitle = styled.p`
    text-align: center;
    margin: 200px auto 40px;


    font-size: 52px;
    font-weight: bold;
    line-height: 1.49;
    color: rgb(0, 0, 0);
`;
const DescriptionContentWrap = styled.div`
    width: 1000px;
    margin: auto;
    position: relative;
    .left-content{
        left: 0px;
    }
    .right-content{
        right: 0px;
    }
    .left-content, .right-content{
        width: 500px;
        position: absolute;
        top: 230px;
    }
    .left-content>*, .right-content>*{
        margin-bottom: 170px;
        display: inline-block;
    }
`;
const BackgroundCircle = styled.div`
    width: 220px;
    height: 220px;
    position: absolute;
    opacity: 0.1;
    border-radius: 50%;
    top:${props=>(props.id==1?'345px':props.id==2?'898px':'1448px')};
    left:${props=>(props.id==1?'827px':props.id==2?'221px':'808px')};
    background-color:${props=>(props.id==(1)?'rgb(68,139,255)':'rgb(68, 255, 187)')};
`;
const DescriptionVerticleLine = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    >p{
        display: inline-block;
        border-right: 1px dotted rgb(212, 214, 220);
        height: 1382px;
    }
`;
const DescriptionStartCircle = styled.div`
    content: "";
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px dotted rgb(51, 102, 255);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    &:before{
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: rgb(51, 102, 255);
        display: inline-block;
    }
`;
const DescriptionEndCircle = styled.div`
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background: rgb(51, 102, 255);
`;
const DescriptionText = styled.div`
    width: 500px;
    height: 400px;
    color: rgb(51, 51, 51);
    letter-spacing: normal;
`;
const DescriptionTitle = styled.p`
    margin: 98px 102px 20px 70px;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.3;
    color: rgb(0, 0, 0);
`;
const DescriptionSubTitle = styled.p`
    margin: auto 102px auto 70px;
    font-size: 20px;
    line-height: 2;
`;

const DashboardDesc = () => {
    return (
        <DescriptionWrap>
            <div>
                <WelcomeSectionTitle>
                    <span>??????????????? ????????????<br/>???????????? ????????? ???????????????.</span>
                </WelcomeSectionTitle>
                <DescriptionContentWrap>
                    <BackgroundCircle id='1'/>
                    <BackgroundCircle id='2'/>
                    <div d='left' className="left-content">
                        <img className='hiring' src={meet} alt="" />
                        <DescriptionText>
                            <DescriptionTitle>
                                <span>
                                    ????????? DOWN<br/>????????? UP
                                </span>
                            </DescriptionTitle>
                            <DescriptionSubTitle>
                                <span>
                                    ?????? ?????? ??? ???????????? ?????????,<br/>
                                    ?????? ?????? 40% ????????? ????????????
                                </span>
                            </DescriptionSubTitle>
                        </DescriptionText>
                    </div>
                    <DescriptionVerticleLine>
                        <DescriptionStartCircle />
                        <p></p>
                        <DescriptionEndCircle />
                    </DescriptionVerticleLine>
                    <div d='right' className="right-content">
                        <DescriptionText>
                            <DescriptionTitle>
                                <span>
                                    ?????????<br/>??????????????? ?????????
                                </span>
                            </DescriptionTitle>
                            <DescriptionSubTitle>
                                <span>
                                    ?????? ???????????? ????????? ????????????,
                                </span>
                            </DescriptionSubTitle>
                        </DescriptionText>
                        <img className='branding' src={win} alt="" />
                    </div>
                </DescriptionContentWrap>
            </div>
        </DescriptionWrap>
    );
};

export default DashboardDesc;