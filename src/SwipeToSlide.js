import React, { Component,useReducer } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import ButtonSlide from "./components/buttonSlides/ButtonSlide";
import ButtonSlides from "./components/buttonSlides/ButtonSlides";

const ButtonSlideList = [
    "취업/이직",
    "커리어고민",
    "회사생활",
    "라이프스타일",
    "IT/기술",
    "리더쉽",
    "조직문화",
    "인간관계",
    "HR",
    "UX/UI",
    "경영/전략",
    "마케팅",
    "개발",
    "데이터",
    "노무",
    "브랜딩",
    "서비스기획",
    "디자인"
];

let initialState = {}
function setInitialState(){
    ButtonSlideList.map((data,idx)=>{
        if (idx==0){
            initialState = [
                {
                    idx:idx+1,
                    cat:data,
                    isChecked:true
                }
            ]
        } else {
            initialState = [
                ...initialState,
                {
                    idx:idx+1,
                    cat:data,
                    isChecked:false
                }
            ]
        }
    })
    // console.log('initialState',initialState)
}

const ACTION_TYPES = {
    switchToTrue : 'switchToTrue'
}

const reducer = (state, action) => {
    switch(action.type){
        case ACTION_TYPES.switchToTrue : 
            {
                state.map(switchBtn => {
                    //이미 true인 거 누르면 return
                    if(switchBtn.isChecked===true && (switchBtn.idx == action.payload.idx))
                        return;
                    //isChecked이 값을 true에서 false로 변경
                    if(switchBtn.isChecked && (switchBtn.idx != action.payload.idx)){
                        switchBtn.isChecked = !switchBtn.isChecked
                    }
                    //선택한 버튼과 idx값이 같으면 isChecked값을 false에서 true로 변경
                    if(switchBtn.idx == action.payload.idx){
                        switchBtn.isChecked = !switchBtn.isChecked
                    }
                })
                console.log('reducer ok:state',state)
                return [...state];
            }
        default : 
            {
                return state;
            }
    }
}

const SwipeToSlide =()=>{
  
    setInitialState();
    const [careerBtn, dispatch] = useReducer(reducer, initialState);

    const settings = {
      focusOnSelect: true,
      infinite: false,
      slidesToScroll: 1,
      speed: 500
    };
    return (
      <div style={{width:"880px",margin:'0 auto'}}>
        <h2>FocusOnSelect</h2>
        <div>Click on any slide to select and make it current slide</div>
        {/* <Container> */}
            <Slider {...settings}>
                {
                    careerBtn.map((data,idx)=>(<ButtonSlide key={idx} dispatch={dispatch} idx={data.idx} catName={data.cat} isChecked={data.isChecked}/>))
                }
            </Slider>
        {/* </Container> */}
      </div>
    );
}
export default SwipeToSlide;