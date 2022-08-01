import React,{useState,useEffect} from "react";
import '../App.css';
import axios from "axios";
import {useNavigate,useParams,Link} from "react-router-dom";
import Comm_Total from "./Comm_Total";
import Board from "./Board";
import Memo from "./Memo";
import CommCareer from "./CommCareer";
import img9 from "../image/logo9.png";


const BoardList1=()=>{

    
    const [data,setData]=useState('');

    //현재 페이지 번호
    const {currentPage}=useParams();

    const navi=useNavigate();

    //url 선언
    let pagelistUrl="http://localhost:9001/board/pagelist?currentPage="+currentPage;
    let photoUrl="http://localhost:9001/save/";

    //시작시 호출되는 함수 
    const pageList=()=>{
        axios.get(pagelistUrl)
        .then(res=>{
           
            setData(res.data);
        })
    }

        useEffect(()=>{
            pageList();
            console.log("photo",data)
        },[currentPage]);
    
    return (
        <div>
            <div class="qna_list_sort">
{/* 
<div class="icoChk_outline filter">
    <span class="inpChk icoChk">
                                    <input type="checkbox" id="popular" class="btn_sort" value="popular"/>
            <label class="lbl" for="popular">인기순</label>
                            </span>
    <span class="inpChk icoChk">
        <input type="checkbox" id="reg_dt" class="btn_sort" value="reg_dt" checked=""/>
        <label class="lbl" for="reg_dt">최신순</label>
    </span>
   
</div>*/}
                  
            </div>
                            
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
                                        <strong class="stit">게시글 전체</strong>
                                        방                </span>
                                    <div class="sub_title_desc">
                                        현재까지 등록된 전체 게시글입니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            <div className='red' style={{ border: "1px solid #ffff", float: "left", width: "100%", height: "100px" }}>

<div className='red' style={{ border: "1px solid #ffff", float: "left", height: "100px" }}>
    <div class="list_num_tit sub">전체 <strong>{data.totalCount}</strong>건</div>
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

       
            <div className="table table-bordered" style={{width:'1300px'}}>
              
                
                <div>
        {
            data.list && data.list.map((row,idx)=>(

               
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
                    <img alt="" className="photo_small" style={{width:"100px"}}
                        src={photoUrl+row.photo}/>
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
                </div>
            </div>

            <br></br>
            <br></br>

            {/* 페이징 */}
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        (data.startPage>1?<li className="page-item">
                            <Link className="page-link" to={`/board/list/${data.startPage-1}`}>이전</Link></li>:'')
                    }
                    {
                        data.parr &&
                         data.parr.map(n=>{
                            const url="/board/list/"+n;
                            return(
                                <li className="page-item">
                                    <Link className="page-link" to={url}><b
                                    style={{color:n==currentPage?'red':'black'}}>{n}</b></Link>
                                </li>
                            )
                        })
                    }
                    {
                        (data.endPage<data.totalPage?
                        <li className="page-item"><Link className="page-link" to={`/board/list/${data.endPage+1}`}>다음</Link></li>:'')
                    }
                </ul>
            </nav>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
          
            

            








        </div>
    )
}

export default BoardList1;


