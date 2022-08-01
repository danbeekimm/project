import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import adImg from '../../images/optimize.jpg';

const Container = styled.div`
    max-width:1060px;
    width:1060px;
    margin: 0px auto 60px;
    background-color:#000;
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    height:110px;
`
const Title = styled.div`
font-size: 24px;
color: #fff;
font-weight: 500;
line-height: 35px;
letter-spacing: -.2px;
margin-left:50px;
>span{
    color: #6e95d4;
}
`
const ImgWrap = styled.div`
flex-grow: 1;
margin-left:50px;
`
const Button =styled.div`
box-sizing: border-box;
border-radius: 25px;
justify-content: center;
vertical-align: middle;
min-width: 64px;
padding: 0 27px;
align-items: center;
display: inline-flex;
color: #333;
    background-color: #fff;
    margin-right:50px;
    width: 220px;
    height: 40px;
    font-size: 15px;
`

const JoinAd = () => {
    const id =0 //로컬 세션으로 가져온 id
    const navi = useNavigate();
    return (
        <Container
            onClick={()=>{
                navi(`/resume/input/${id} `)
            }}>
            <Title>
                쉽고 간단한 <span>하이어잇 이력서</span>를 원한다면?
            </Title>
            <ImgWrap>
                <img src={adImg}></img>
            </ImgWrap>
            <Button>
                <span>이력서 쓰러가기</span>
            </Button>
        </Container>
    );
};

export default JoinAd;