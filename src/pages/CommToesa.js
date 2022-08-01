import React,{useState,useEffect} from "react";
import '../App.css';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import BoardRowItem from "./BoardRowItem";
import Comm_Total from "./Comm_Total";
import img9 from "../image/logo9.png";
const CommToesa=()=>{
    const navi=useNavigate();
    //백엔드에서 받아올 리스트 데이타 변수
    const [cateList,setCateList]=useState([]);
    // const {category, setCategory}=useContext(CommunitySaveContext);
 
    // const [test, setTest] = useState('')
  
   
    //url 선언
    let url = "http://localhost:9001/board/alllist?category_name=" +"퇴사" ;
    let photoUrl = "http://localhost:9001/save/";

 //데이타 가져오는 함수
    const list=()=>{
      axios.get(url)
      .then(res=>{
          //스프링으로부터 받아온 List 를 cateList 에 넣기
          setCateList(res.data);
          console.log("memo의 카테고리 리스트");
          
      })
    }

    //처음 랜더링시 딱 한번 데이타 가져오기
    useEffect(()=>{
      console.log("커리어!");
      list();
    },[url]);

    return (
        <div>
          {/* {category} */}
          <div className='green' style={{ border: "1px solid #ffff", width: "200%", height: "100px" }}>
                <div style={{ border: "1px solid #ffff", float: "left", width: "100%", height: "70px" }}>
                    <div className='total_button2'>
                        <button type="button" class="btn btn-outline-primary"
                            onClick={()=>{
                                navi("/board/list/1");
                                }}>전체글</button>

                        <button type="button" class="btn btn-outline-primary"
                           onClick={()=>{
                                navi("/board/Career");
                            }}>커리어</button>

                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                 navi("/board/qanda");
                            }}>Q&A</button>

                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                navi("/board/chwieob");
                            }}>취준</button>

                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                navi("/board/ijig");
                            }}>이직</button>

                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                navi("/board/toesa");
                            }}>퇴사</button>
                            
                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                navi("/board/jabdam");
                            }}>잡담</button>
                    </div>
                </div>
                <div className='red2' style={{ border: "1px solid #ffff", float: "left", width: "100%", height: "10px" }}>
                   
                </div>


            </div>
     
            <div className='red2' style={{ border: "1px solid #ffff", float: "left", width: "100%", height: "200px" }}>
                    <div id="sri_section" class=" layout_full ">
                        <div id="sri_wrap">
                            <div id="content">
                                <div class="sub_top_wrap tag_list">
                                    <span class="sub_title_tag">
                                        <strong class="stit">퇴사 </strong>
                                        방                </span>
                                    <div class="sub_title_desc">
                                    “퇴사” 관련 이야기를 공유하는 방입니다
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            <div className='red' style={{ border: "1px solid #ffff", float: "left", width: "100%", height: "100px" }}>

<div className='red' style={{ border: "1px solid #ffff", float: "left", height: "100px" }}>
    <div class="list_num_tit sub">전체 <strong>{cateList.length}</strong>건</div>
</div>
<div className='red' style={{ border: "1px solid #ffff", float: "left", width: "33%", height: "50px" }}>
</div>
<div className='red3' style={{ position: "relative", border: "1px solid #ffff", float: "right", width: "56%", height: "30px", justifyContent: "flex-end" }}>
    <div className="search">
        <nav className="navbar navbar-light" style={{ backgroundcolor: "#e3f2fd" }}>
            <div className="container-fluid one" style={{ border: "1px solid #ffff", position:"relative", float: "left",bottom:"210px", width:"50ox",height: "300px" }}>
                    <img src={img9} className="logo" alt='' style={{position:"relative", width:"300px", left:"410px",top:"30px"}} />
                            
                {/* <form className="d-flex">
                    <input style={{ width: "300px", position:"relative",float:"right" }} className="form-control me-2" type="search" placeholder="다른사람들은 어떤 이야기를 할까?" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form> */}
            </div>
        </nav>
    </div>
</div>
</div>
<div className='red_one' style={{ border: "1px solid #ffff", float: "right", width: "34%", height: "60px" }}>
                            <div style={{
                                border: "1px solid #ffff",  width: "100%", height: "100px"
                            }}>
                                <button type="button" className="btn btn-primary"
                                    style={{ height: "50px", width: "260px",  float: "right" }}
                                    onClick={() => {
                                        navi("/board/form");
                                    }}>글쓰기
                                </button>
                            </div>
                        </div>
            {/* <tr>
                    <td> 글 수 : <strong>{cateList.length}</strong></td>
                  </tr> */}
            
            <table className="table table-bordered" style={{width:'500px'}}>
            
              <tbody>
                {
               cateList && cateList.map((row,idx)=>(
                    <table class="type04" onClick={()=>{
                      navi(`/board/detail/${row.board_id}`)
                  }} style={{cursor:"pointer"}}>
                      <br></br>
                
  <tr>
                  <tr>
                  <td scope="row" onClick={()=>{
                          navi(`/board/detail/${row.board_id}`)
                      }} style={{cursor:'pointer',fontWeight: "bold", marginTop:"30px"}}>
                        
                          <td style={{fontSize:"20px"}}>{row.title}</td>
                      </td>
                    {/* < style={{ fontWeight: "bold", marginTop:"30px"}}>{row.title}</td> */}
                  </tr>
                  <tr>
                    <td style={{fontSize:"17px"}}>{row.content}</td>   
                  </tr>
                  <tr>
                    <td>조회  {row.hit}</td>
                  </tr>
                 
                  <td>
                      {/* <img alt="" className="photo_small" style={{width:"100px"}}
                          src={photoUrl+row.photo}/> */}
                       </td>   
                  </tr>
                  
                  <tr>
                      <td>
                      {/* <img alt="" className="photo_small" style={{width:"100px"}}
                          src={photoUrl+row.photo}/> */}
                       </td>   
                  </tr>
                  
                
                </table>
                  ))
                }
              </tbody>
            </table>
        </div>
    )
}

export default CommToesa;