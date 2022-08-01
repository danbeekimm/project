import React, { Component } from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import balang from '../../../images/dashboard/발랑.jpg'
import img404 from '../../../images/dashboard/404.png'
import kakaoImg from '../../../images/dashboard/Kakao.png'
import nl from '../../../images/dashboard/nextlevel.jpg'


const Container = styled.div`
  overflow:hidden;
  width:880px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div{
    outline: none;
  }
`;

const SlickReviewContainerWrap = styled.div`
  outline: none;
  width: 430px;
`;
const SlickReviewContainer = styled.div`
  width: 100%;
  display: inline-block;
`;
const SlickReviewCard = styled.div`
  padding: 34px 30px 30px;
  font-size: 30px;
  text-align: center;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  margin: 0px 10px;
  height: 470px;
  box-shadow: rgb(78 78 78 / 11%) 0px 7px 7px 6px;
  display: flex;
  flex-direction: column;
`;
const SlickReviewTitle = styled.p`
  margin-bottom: 34px;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 1.4;
  color: rgb(0, 0, 0);
  text-align: left;
`;
const SlickReviewContent = styled.p`
  flex: 1 1 0%;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  line-height: 2;
  letter-spacing: -0.6px;
  color: rgb(107, 107, 107);
  max-height: 350px;
  margin-left: 6px;
  overflow-y: hidden;
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
const Img = styled.img`
  width: 60px;
  height: 60px;
`;
const ImgSpan = styled.span`
font-size: 18px;
font-weight: 500;
line-height: normal;
color: rgb(0, 0, 0);
`;

const imgUr = require('../../../images/dashboard/corp-dashboard-citi-view.jpg');

const items = [
  {
    id: 1, title: "직무 핏에 딱 맞는 빠른 채용이 가능해요",
    content1: "스타트업 출신의 인재 비율이 월등히 높아, 직무에 딱 맞는 지원자를 채용하기 편합니다.",
    content2: "IT 업계에 대한 높은 이해력도 갖추고 있어,  입사자들의 적응 또한 빠른 편이에요.",
    corp: "발랑",
    imgUrl: balang
  },
  {
    id: 2, title: "명확하고 간결한 이력서 양식,채용 담당자도 선호해요.",
    content1: "스타트업 출신의 인재 비율이 월등히 높아, 직무에 딱 맞는 지원자를 채용하기 편합니다.",
    content2: "IT 업계에 대한 높은 이해력도 갖추고 있어,  입사자들의 적응 또한 빠른 편이에요.",
    corp: "클래스404",
    imgUrl: img404
  },
  {
    id: 3, title: "미디어 직군도 믿고 뽑고 있어요.",
    content1: "스타트업 출신의 인재 비율이 월등히 높아, 직무에 딱 맞는 지원자를 채용하기 편합니다.",
    content2: "IT 업계에 대한 높은 이해력도 갖추고 있어,  입사자들의 적응 또한 빠른 편이에요.",
    corp: "NEXT LEVEL",
    imgUrl: nl
  },
  {
    id: 4, title: "능력있는 개발자를 채용할 수 있어요.",
    content1: "스타트업 출신의 인재 비율이 월등히 높아, 직무에 딱 맞는 지원자를 채용하기 편합니다.",
    content2: "IT 업계에 대한 높은 이해력도 갖추고 있어,  입사자들의 적응 또한 빠른 편이에요.",
    corp: "kakao",
    imgUrl: kakaoImg
  },
];


export default class SimpleSlider extends Component {
  render() {
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
                      <SlickReviewContent>
                        <span>{item.content1}</span>
                        <br />
                        <span>{item.content2}</span>
                      </SlickReviewContent>
                      <SlickReviewImgWrap>
                        <ImgWrap>
                          <Img src={item.imgUrl} />
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
    );
  }
}
