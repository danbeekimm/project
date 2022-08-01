import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CarouselInner = styled.div`
    width:1060px;
    max-width:1060px;
    .carousel-caption{
        right:inherit;
        left: 50px;
        text-align:left;
        width:228px;
        padding:0.75rem;
        border-radius:5px;
        background-color:rgba(255,255,255,0.9);
        margin-bottom:25px;
    }
    .carousel-des{
        cursor:pointer;
        &:hover{
            color:#333;
        }
    }
`;

const MainSlick = () => {
    const navi = useNavigate();
    return (
        <div style={{ fontFamily: 'S-CoreDream-5Medium', display: 'flex', justifyContent: 'center' }}>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                    <CarouselInner className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img style={{ borderRadius: '4px' }} src={require('../images/slide/1.jpg')} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>토크토크토크</h5>
                                <p style={{borderBottom:'1px solid lightgray',fontSize:'13px', color:'#b3b3b3',padding:'8px 0'}}>개발자들을 위한 커뮤니티</p>
                                <p className='carousel-des' style={{color:'#1976d2',fontSize:'13px',marginTop:'8px'}}
                                    onClick={()=>{
                                        navi(`/community`)
                                    }}>바로가기</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img style={{ borderRadius: '4px' }} src={require('../images/slide/2.jpg')} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>이력서 잘~ 쓰는 방법</h5>
                                <p style={{borderBottom:'1px solid lightgray',fontSize:'13px', color:'#b3b3b3',padding:'8px 0'}}>
                                    합격하는 이력서 쓰는 방법</p>
                                <p className='carousel-des' style={{color:'#1976d2',fontSize:'13px',marginTop:'8px'}}
                                    onClick={()=>{
                                    }}>바로가기</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img style={{ borderRadius: '4px' }} src={require('../images/slide/3.jpg')} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>코드를 보여주세요</h5>
                                <p style={{borderBottom:'1px solid lightgray',fontSize:'13px', color:'#b3b3b3',padding:'8px 0'}}>
                                    코딩대회를 합니다</p>
                                <p className='carousel-des' style={{color:'#1976d2',fontSize:'13px',marginTop:'8px'}}
                                    onClick={()=>{
                                    }}>바로가기</p>
                            </div>
                        </div>
                    </CarouselInner>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span style={{opacity:'0'}} className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span style={{opacity:'0'}} className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default MainSlick;