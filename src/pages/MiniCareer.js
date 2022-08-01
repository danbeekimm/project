import React,{useState,useEffect} from "react";
import '../App.css';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import BoardRowItem from "./BoardRowItem";
import Comm_Total from "./Comm_Total";

const MiniCareer=()=>{
    const navi=useNavigate();
    //백엔드에서 받아올 리스트 데이타 변수
    const [cateList,setCateList]=useState([]);
    // const {category, setCategory}=useContext(CommunitySaveContext);
 
    // const [test, setTest] = useState('')
  
   
    //url 선언
    let url = "http://localhost:9001/board/alllist?category_name=" +"커리어" ;
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
          
            
            
            <div className="career" style={{width:'500px'}}>
            
              <tbody>
                {
               cateList && cateList.map((row,idx)=>(
                    <table class="blockstyle" onClick={()=>{
                      navi(`/board/detail/${row.board_id}`)
                  }} style={{cursor:"pointer"}}>
  <div>
                  <div>
                  <div scope="row" onClick={()=>{
                          navi(`/board/detail/${row.board_id}`)
                      }} style={{cursor:'pointer',fontWeight: "bold", marginTop:"30px"}}>
                        
                          <span className="txt11" style={{fontSize:"15px"}}>{row.title}</span>
                      </div>
                    {/* < style={{ fontWeight: "bold", marginTop:"30px"}}>{row.title}</td> */}
                  </div>
                
                  <div>
                    <span className="txt13">조회  {row.hit}</span>
                  </div>
                 
                 
                  </div>
                  
                 
                  
                
                </table>
                  ))
                }
              </tbody>
            </div>
        </div>
    )
}

export default MiniCareer;