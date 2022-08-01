import React, {useContext,useEffect,useReducer, useState} from 'react';
// import { CareerBtnContext } from '../Main';
import ButtonSlide from './ButtonSlide';
import styled from 'styled-components';

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
    console.log('initialState',initialState)
    console.log('initialState type:',typeof(initialState))
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
//margin-left:${props=>props.y}px;                                                                                         
const Translate = styled.div`
    transform:translateX(${props=>(props.y)}%);
    display:flex;
    flex-wrap:nowrap;
    transition:all .75s cubic-bezier(0.45, 0.05, 0.55, 0.95);
`;
const ButtonSlides = ({margin}) => {
    setInitialState();
    const [careerBtn, dispatch] = useReducer(reducer, initialState);
    return (
        <Translate y={margin}>
            {
                careerBtn.map((data,idx)=>(<ButtonSlide y={margin} key={idx} dispatch={dispatch} idx={data.idx} catName={data.cat} isChecked={data.isChecked}/>))
            }
        </Translate>
    );
};

export default ButtonSlides;