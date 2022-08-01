import React,{useRef, useCallback, useState, useEffect} from 'react';
import Slick from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { css } from 'styled-components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import axios from 'axios';
import './RecommendCorp.css';
import { Link, useNavigate, useParams } from "react-router-dom";


const Wrap = styled.div`
    position: relative;
    padding-bottom: 70px;
    overflow: hidden;
   
    // 1. Global style 추가했던 것을 슬라이드 상단에 Wrap을 만들어 여기서 선언했습니다.
    .slick-slide {
        display: inline-block;
    }
   
    // 2. 제가 추가한 커스텀 클래스입니다.
    // pagination 부분입니다.
    .slick-dots.slick-thumb {
        position: absolute;
        bottom: 0;
        left: 50%;
        padding: 0;
        margin: 0;
        
        list-style: none;
        transform: translate(-50%);

        li {
            position: relative;
            display: inline-block;
         
            &.slick-active {
                span {
                    filter: none;
                }
            }
        }
    }  
`;

const SlickItems = styled.div`
    width: 100%;    
    height: 400px;
    text-align: center;

    img {
        max-width: 100%;
        height: 100%;
        vertical-align: top;
    }
`;

const defaultButtonStyle = css`
    position: absolute;
    top: calc(50% - 50px);
    padding: 0;
    width: 40px;
    height: 40px;
    line-height: 1;
    border: none;
    border-radius: 50%;
    background: none;
    outline: none;
    cursor: pointer;
`;

const PrevButton = styled.button`
    ${defaultButtonStyle}
    left: 0;
`;

const NextButton = styled.button`
    ${defaultButtonStyle}
    right: 0;
`;


const PagingAnchor = styled.a`
    display: block;
    width: 0px;
    height: 40px;
    margin-top: -40px;
    img {
        width: 100%;
        height: 100%;
    }
`;



const RecommendCorp = () => {
    const navi = useNavigate();
    let photoUrl=process.env.REACT_APP_SPRING_URL+"image/";
    let slickUrl=process.env.REACT_APP_SPRING_URL+"corp";
    // 5. custom arrows를 만들어 ref를 통해 제어합니다.
    const slickRef = useRef(null);
    const [dto,setDto]=useState([]);

    

    function list() {
        axios.get(slickUrl)
            .then(res => {
                console.log(res.data);
                setDto(res.data);
                
                console.log(dto);
            });
    }


    useEffect(()=>{
        list();
    },[]); 

   // 6. slick에 추가할 세팅입니다.
    const settings = {
        dots: true,
        // 5. custom arrows를 만들기 위해 기본 arrows옵션을 false로 합니다.
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        // 2. custom pagination을 만듭니다.
        // i(index)를 통해 샘플이미지에서 동일한 이미지를 가져옵니다.
        customPaging: function(i) {
            
            return (
                <PagingAnchor className='slick-active'>
                        <button type='button'>::before i</button>
                </PagingAnchor>
            );
        },
    };
    
   // 5. custom arrows 동작 함수를 만듭니다.
    const previous = useCallback(() => slickRef.current.slickPrev(), []);
    const next = useCallback(() => slickRef.current.slickNext(), []);
    
    return (
        <div className='container'>
            <Wrap>
         <Slick 
            ref={slickRef} {...settings} >
            {
                dto && dto.map((v,idx)=>(
                    
                        
                        <SlickItems className='slideitem' key={idx} onClick={()=>{navi('job_posting/detail/'+v.corp_id+'/'+v.num)}} >
                            <img className='slideimg' src={photoUrl+v.job_posting_photo} alt=''  
                            />
                            <div className='slidetitle'>
                            {v.corp_name}<br/>
                            {v.title}</div>
                        </SlickItems>
                        
                    
                ))}
                <br/>
            </Slick>
            <>
                <PrevButton onClick={previous} className='prebtn'>
                    <span className="hidden"><ChevronLeftIcon/></span>
                    
                </PrevButton>

                <NextButton onClick={next} className='nextbtn' >
                    <span className="hidden"><ChevronRightIcon/></span>
                    
                </NextButton>
            </>
        </Wrap>

        </div>
    );
};

export default RecommendCorp;