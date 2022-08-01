import React, { useReducer, createContext, useMemo, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonSlides from './buttonSlides/ButtonSlides';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { ColorLensOutlined } from '@mui/icons-material';
import InsightContents from './insightContent/InsightContents';
import MainSlick from './MainSlick';
import styled from 'styled-components';
import MainJobPosting from './mainJobPosting/MainJobPosting';
import DashboardSlick from '../pages/corporation/Dashboard/DashboardSlick'
import JoinAd from './mainJobPosting/JoinAd';
import Slider from "react-slick";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { LoginContext } from '../contexts/LoginContext';


const InsightList = () => {

    let r = Math.floor(Math.random() * 8) + 2

    return <div className='insight-list'>
        <a style={{ width: '100%' }} target='_blank' href="#">
            <div className="career-insight-content-image-wrap">
                <img width='250' height='175' src={require(`../images/article/${r}.jpg`)} alt="" />
            </div>
            <p className="career-insight-content-title">상상도 못한 정체</p>
            <p className="career-insight-content-desc">구게 뭔제 그게 뭔데 그게 뭔데</p>
            <div className="career-insight-content-info">
                <img src={require('../images/article/kdb.jpg')} alt="" />
                <p style={{ margin: '0 5px' }}>ㄴㅇㄱ</p>
            </div>
        </a>
    </div>
}
const MainBottomContainer = styled.div`
padding:60px 0 80px;

`
const MainBottom = styled.div`
    border: 1px solid #ececec;
    border-radius: 4px;
    color: #333;
    align-self: auto;
    display: flex;
    max-width:1060px;
    width:1060px;
    margin:0 auto;
    align-items: center;
    cursor:pointer;
`;
const MainContent = styled.div`
padding: 18px 0 0;
    border-right: 1px solid #ececec;
    width: 25%;
    display:flex;
    flex-direction:column;
    &:last-of-type{
        border-right: none;
    }
    >div,a{
        display:flex;
        align-items:center;
        flex-direction:column;
        color:#333;
    }
    span{
        padding: 18px 8px;
        
    }
    
`;

//slick
const Container = styled.div`
  overflow:hidden;
  width:1060px;
  margin:0 auto 120px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div{
    outline: none;
  }
`;

const SlickReviewContainerWrap = styled.div`
  outline: none;
  width: 525px;
`;
const SlickReviewContainer = styled.div`
  width: 100%;
  display: inline-block;
`;
const SlickReviewCard = styled.div`
  padding: 34px 30px 30px;
  font-size: 28px;
  text-align: center;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  margin: 0px 10px;
  height: 230px;
  display: flex;
  border:1px solid #e1e2e3;
  flex-direction: column;
`;
const SlickReviewTitle = styled.p`
  margin-bottom: 34px;
  font-size: 24px;
  font-weight: normal;
  letter-spacing: -0.5px;
  line-height: 1.4;
  color: rgb(0, 0, 0);
  text-align: left;
`;
const SlickReviewImgWrap = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const ImgWrap = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(236, 236, 236);
`;
const ImgSpan = styled.span`
font-size: 18px;
font-weight: 500;
line-height: normal;
color: #85878c;
`;

const items = [
    {
        id: 1, title: "기업에 대한 정보를 쉽게 볼 수 있어 좋아요",
        corp: "네이바에 입사한 익명의 하이어잇",
        // imgUrl: balang
    },
    {
        id: 2, title: "명확하고 간결한 이력서 양식,채용 담당자도 선호해요.",
        corp: "구팡에 입사한 익명의 루팡",
        // imgUrl: img404
    },
    {
        id: 3, title: "개발 직종에 관한 다양한 정보를 얻을 수 있어 좋아요.",
        corp: "프로 월급 루팡러"
        // imgUrl: nl
    },
    {
        id: 4, title: "검색기능이 깔끔해 채용정보를 찾기에 최적화된 사이트",
        corp: "스타트업 러버",
        // imgUrl: kakaoImg
    },
];


export const UserContext = createContext('');

const Main = () => {
    const navi = useNavigate();
    const { login } = useContext(LoginContext);
    // const value = useMemo(() => ({dispatch}), [dispatch]);
    const [show, setShow] = React.useState('');
    const handleClick = () => {

    };

    const [openPopper, setOpenPopper] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClickOpenPopper = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenPopper((previousOpenPopper) => !previousOpenPopper);
    };

    const canBeOpenPopper = openPopper && Boolean(anchorEl);
    const id = canBeOpenPopper ? "transition-popper" : undefined;

    let [values, setValues] = useState([])
    const [margin, setMargin] = useState(0);
    useEffect(() => {
        //magin==0 이면, 왼쪽 화살표 안 보이게
        //margin==-65 이면, 오른쪽 화살표 안 보이게
    }, [margin])

    const settings = {
        dots: true,
        infinite: true,
        speed: 2500,     // 넘기는 속도
        autoplay: true, // 자동으로 넘김
        autoplaySpeed: 3500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <ArrowBackIosNewIcon />,
        prevArrow: <ArrowForwardIosIcon />,
        centerMode: false,
    };

    return (
        <UserContext.Provider value={'value'}>
            <div style={{ fontFamily: 'S-CoreDream-5Medium', marginTop: '20px' }}>
                <MainSlick />
                {/* 커리어 관련 섹션 */}
                <section className="career-insight-wrap main-sections">
                    <div className="main-section-wrap">
                        <div className="career-insight-title-wrap">
                            <h5 className='career-insight-title'>HIREIT 추천 커리어 인사이트</h5>
                            <button
                                aria-describedby={id}
                                type="button"
                                onClick={handleClickOpenPopper}
                            >
                                <i class="bi bi-question-circle" style={{ colof: '#999' }}></i>
                                {/* <EmojiPeopleIcon sx={{color:'gray'}}/> */}
                            </button>
                            <Popper id={id} open={openPopper} anchorEl={anchorEl} transition>
                                {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={350}>
                                        <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                                            취직/이직 준비하시기도 바쁘시죠? 😎<br />
                                            커리어 인사이트, 이제 따로 찾지 말고 <br />
                                            하이어잇에서 만나보세요!<br />
                                            검증된 IT업계 전문가들이 다양한 <br />
                                            채널에서 생산하는 커리어 콘텐츠를 선별해서 <br />
                                            관심 태그 기반으로 제공해 드립니다.
                                        </Box>
                                    </Fade>
                                )}
                            </Popper>
                        </div>
                        <div className="career-insight-chip-scroll">
                            {/* <div className="insight-test-test">버튼 들어올 곳</div> */}
                            {margin == 0 ? "" : <div className="slides-left-btn">
                                <div className="insight-button-slides-arrow"
                                    onClick={() => {
                                        console.log("왼")
                                        margin >= -5 ? setMargin(0) : setMargin(margin + 10);
                                    }}>
                                    <ArrowBackIosNewIcon sx={{ color: 'gray', marginLeft: '7px' }} />
                                </div>
                            </div>}
                            {margin == -53 ? "" : <div className="slides-right-btn">
                                <div className="insight-button-slides-arrow"
                                    onClick={() => {
                                        console.log("오")
                                        margin <= -50 ? setMargin(-53) : setMargin(margin - 10)
                                    }}>
                                    <ArrowForwardIosIcon sx={{ color: 'gray', marginLeft: '4px' }} />
                                </div>
                            </div>}
                            <div id='button-slides' className="insight-button-slides">
                                <ButtonSlides margin={margin} />
                            </div>
                        </div>
                        <div className="career-insight-contents">
                            <InsightContents />
                            {/* {
                                    [...new Array(8)].map((a,idx)=>(<InsightList></InsightList>))
                                } */}
                        </div>
                        <div className="career-insight-more">
                            <button className="career-insight-more-button">
                                <span className="more-button-text"></span>
                                <span className="more-button-svg"></span>
                            </button>
                        </div>
                    </div>
                </section>

                <JoinAd />

                <div style={{display:'flex', justifyContent:'center'}}>
                    <h5 style={{margin:'90px auto 50px'}}>개발자 맞춤 구직 사이트, 하이어잇</h5>
                </div>
                <Container>
                    <StyledSlider {...settings}
                    >
                        {items.map(item => {
                            return (
                                <div key={item.id}>
                                    <SlickReviewContainerWrap>
                                        <SlickReviewContainer >
                                            <SlickReviewCard>
                                                <SlickReviewTitle>
                                                    <span>{item.title}</span>
                                                </SlickReviewTitle>
                                                <SlickReviewImgWrap>
                                                    <ImgWrap>
                                                        <AccountCircleIcon sx={{ fontSize: '55px', color: ' #85878c' }} />
                                                        {/* <Img src={item.imgUrl} /> */}
                                                    </ImgWrap>
                                                    <ImgSpan>{item.corp}</ImgSpan>
                                                </SlickReviewImgWrap>
                                            </SlickReviewCard>
                                        </SlickReviewContainer>
                                    </SlickReviewContainerWrap>
                                </div>
                            );
                        })}
                    </StyledSlider>
                </Container>
                <MainJobPosting />
                <MainBottomContainer>
                    <div className="main-section-title-wrapper">
                        <div className="main-section-title-wrap" style={{ marginBottom: '30px' }}>
                            <h5 className="main-section-title">채용 정보를 찾고 계신가요?</h5>
                        </div>
                    </div>
                    <MainBottom>
                        <MainContent>
                            <div>
                                <i class="bi bi-search" style={{ fontSize: '32px', color: '#333' }}></i>
                                <span>
                                    채용공고 <ArrowForwardIosIcon style={{ fontSize: '15px' }} />
                                </span>
                            </div>

                        </MainContent>
                        <MainContent>
                            <div
                                onClick={() => {
                                    !login && alert("로그인을 해주세요")
                                    navi(`/login`)
                                }}>
                                <i class="bi bi-person" style={{ fontSize: '32px', color: '#333' }}></i>
                                <span>
                                    마이 프로필 <ArrowForwardIosIcon style={{ fontSize: '15px' }} />
                                </span>
                            </div>
                        </MainContent>
                        <MainContent>
                            <div
                                onClick={() => {
                                    navi(`/corp/welcome`)
                                }}>
                                <i class="bi bi-building" style={{ fontSize: '32px', color: '#333' }}></i>
                                <span>
                                    기업회원 페이지<ArrowForwardIosIcon style={{ fontSize: '15px' }} />
                                </span>
                            </div>
                        </MainContent>
                        <MainContent>
                            <a href='https://github.com/ad9570/hireit_front' target="_blank">
                                <i class="bi bi-github" style={{ fontSize: '32px', color: '#333' }}></i>
                                <span>
                                    깃허브<ArrowForwardIosIcon style={{ fontSize: '15px' }} />
                                </span>
                            </a>
                        </MainContent>
                    </MainBottom>
                </MainBottomContainer>
            </div>
        </UserContext.Provider>
    );
};

export default Main;