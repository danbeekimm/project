import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import '../App.css';


const Comm_MyPage = () => {
    const navi=useNavigate();


    return (
        <div>
           <div className="my_areapage">
<div style={{border: "1px solid #ffff", float: "left", width: "45%",padding:"10px"}}>

<img id="divProfile" src="https://ssl.pstatic.net/static/pwe/address/img_profile.png" alt=""></img>
</div>
        <div className="profile_pic_wrap">
              

<div style={{border: "1px solid #ffff", float: "left", width: "33%",padding:"10px 20px 30px 20px"}}>

            <div className="member_info_row">
                    <strong className="name">
                        u0XtF493님
                    </strong>
            </div>

            
           
</div>

        </div>

    






<div style={{border: "1px solid #ffff", float: "left", width: "100%", height:"100px"}}>
        <button type="button" class="btn btn-light"
                        style={{height:"50px",width:"260px",position:"relative"}}>프로필 수정</button>
        <button type="button" className="btn btn-primary"
                        style={{height:"50px",width:"260px",position:"relative"}}
                        onClick={()=>{
                        navi("/board/form");
                        }}>글쓰기
        </button>
</div>








</div>
        </div>
    );
};

export default Comm_MyPage;