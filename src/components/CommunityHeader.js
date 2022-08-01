import { padding } from '@mui/system';
import React from 'react';
import '../App.css';
import infoimg from '../image/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import { useNavigate } from 'react-router-dom';

const CommunityHeader = () => {
  const navi=useNavigate();


    return (
        <div className="communityheader">
             <header id="sri_header">
          {/* 로고 & 검색창 래퍼 */}
          <div className="header-logo-search-wrap">
            <img  src={infoimg} className="logo" alt='' 
            style={{height:'100px', cursor: "pointer"}}
            onClick={()=>{
              navi("/community");
              }}
            >
              
            </img>
            

<div className="btn-group">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
   커뮤니티&nbsp;
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">채용정보</a></li>
    <li><a className="dropdown-item" href="#">신입공채</a></li>
    <li><a className="dropdown-item" href="#">기업·연봉정보</a></li>
    <li><a className="dropdown-item" href="#">이직제안</a></li>
    <li><a className="dropdown-item" href="#">인적성면접</a></li>
  </ul>
</div>    
            <div className="search">
            <nav className="navbar navbar-light" style={{backgroundcolor: "#e3f2fd"}}>
                <div className="container-fluid">
                  <form className="d-flex">
                    <input style={{width:"700px"}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                  </form>
                </div>
              </nav>
            </div>
      
      <div>
            <button type="button" className="btn btn-primary" style={{margin:"10px"}}>로그아웃</button>
            <button type="button" className="btn btn-primary position-relative">
      Profile
      <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
        <span className="visually-hidden">New alerts</span>
      </span>
    </button>
    </div>
              
           
            
          </div>

          {/* 메뉴바 */}
     
            <nav className="nav">
                <a className="nav-link" href="/Community">커뮤니티 홈</a>
                <a className="nav-link" href="/board/list/1">글 전체</a>
                <a className="nav-link" href="/community/comm_mypage">MY프로필</a>
                {/* <a className="nav-link" href="/board/category">카테고리</a> */}
                {/* onclick을 준 getData 버튼을 눌러서 이동해도 됐지만 게시판 내 각각 다른 설명을 주기 위해 
                카테고리 개별 컴포넌트를 생성했음. 그리고 카테고리링크를 누르면 카테고리를 설정해주지 못한글이 나옴..
                Board/list/1 의 테이블 값을 초기로 넘겨주는 방법을 모르겠음 */}

                {/* <a className="nav-link" href="#">현직자인터뷰</a> */}
            </nav>
        </header>

         </div>

         
    );
};

export default CommunityHeader;