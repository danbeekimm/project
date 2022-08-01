import React,{useState} from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './CategoryDetail.css';
import {useNavigate } from "react-router-dom";


const category = [
    "개발 전체",
    "웹 개발자",
    "서버 개발자",
    "프론트엔드 개발자",
    "소프트웨어 엔지니어",
    "자바 개발자",
    "안드로이드 개발자",
    "iOS 개발자",
    "Node.js 개발자",
    "데이터 엔지니어",
    "파이썬 개발자",
    "DevOps / 시스템 관리자",
    "C/C++ 개발자",
    "시스템/네트워크 관리자",
    "머신러닝 엔지니어",
    "데이터 사이언티스트",
    "빅데이터 엔지니어",
    "QA/테스트 엔지니어",
    "개발 매니저",
    "기술지원",
    "보안 엔지니어",
    "프로덕트 매니저",
    "PHP 개발자",
    "블록체인 플랫폼 엔지니어",
    "임베디드 개발자",
    "웹 퍼블리셔",
    "하드웨어 엔지니어",
    "크로스플랫폼 앱 개발자",
    ".NET 개발자",
    "영상/음성 엔지니어",
    "DBA",
    "그래픽스 엔지니어",
    "CTO/Chief Technology",
    "VR 엔지니어",
    "ERP전문가",
    "루비온레일즈 개발자",
    "BI 엔지니어",
    "CIO/Chief Information"
];


const CategoryDetail = ({showTeg,setShowTeg,searchList}) => {
    // const [newTeg, setNewTeg]= useState([]);
    
    let loginok=localStorage.loginok;
    let id=localStorage.myid;

    const [click, setClick] = useState(new Array(category.length).fill(true));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    const handle =(event)=>{
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    }

    const navi = useNavigate();
    const showCategory = () => {
        
        if(loginok==null){
            alert("먼저 로그인 후 글을 작성해주세요");
            navi("/login"); //login으로 가기

        }
        const tegArray = category.filter((value,i)=>!click[i]); //누른 아기들은 남긴다.
        const toString = tegArray.join(); //,로 배열을 스트링으로 
        
        setShowTeg(toString);
        console.log(showTeg);
        // searchList();
    }

    const showDevalTeg = (cat, idx) => {
    
        if (click[idx]) {
            if (click.filter((value)=>!value).length >= 3){
            alert("3개까지 선택가능합니다");
            return;    
            }
        }
        //1. 0~idx개만큼 우선 자른다 > 2. true 인 것을 click시 false로 > 3. 그 클릭한것 뒤부터 끝까지 붙인다.
        setClick(click.slice(0,idx).concat(!click[idx]).concat(click.slice(idx+1,click.length)));
            
        
        // 배열이 객체로 변함.
        // setClick({...click,[idx]: !click[idx]});
        
    }


    useEffect(()=>{
        searchList();
    
    },[showTeg]);   

    useEffect(()=>{
        showCategory();

    },[click]);
        
    return (
        <div className='container'>
            <Box className='boxdevelop'>
            <Button className='develop'onClick={handleClick('bottom-start')}>
                {/* {check.length ==0?'개발':check} */}
                {showTeg.length==0?'개발직군':showTeg}
                {open ? <ExpandLess /> : <ExpandMore />}</Button>
                <hr/>
            <Popper open={open} placement={placement}  transition >
                {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper className='pap'>
                    <Typography className='typo' sx={{ p: 2 }} >
                        <span className='choice'>직무를 선택해주세요.(최대 3개 선택 가능)</span><br/><br/>
                    {
                    category&&
                    category
                    // .map((cat,idx)=>(<CategoryResult key={idx} cat={cat}/>))
                    .map((cat, idx)=> (
                        
                        <Button className='techTegBtn' type='button' variant="outlined" key={idx}
                        
                        /* 삼항연산자
                            {() ? () : ()}
                            {(조건 혹은 true/false) ? (조건이 맞을때/true는 {}자체가 이 값이 됨) : (조건이 안맞을때/false는 {}자체가 이 값이 됨) }
                        */
                        onClick={()=>
                            {showDevalTeg(cat, idx)
                            // checkUpdate(cat,idx)
                        }
                        }>{cat}
                            { click[idx] ? <AddIcon style={{fontSize:'1rem'}}/>:<CheckIcon style={{fontSize:'1rem'}}/>}
                        </Button>
                            
                            
                        ))
                
                }
                <hr/>
                <Button className='ok' variant="contained" onClick={handle} >선택완료</Button>
                </Typography>
                    </Paper>
                </Fade>
                )}
            </Popper>

            </Box>

        </div>
    );
};

export default CategoryDetail;