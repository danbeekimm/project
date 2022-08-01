import React,{useState,useEffect} from "react";
import '../App.css';
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";
import BoardList1 from "./BoardList1";
import BoardList2 from "./BoardList2";
import BoardList3 from "./BoardList3";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'; 
import Comm_Total from "./Comm_Total";
import Memo from "./Memo";

const Board=()=>{

    const [search, setSearch] = useState("");
   
  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

<form onSubmit={e => search(e)}>
   <input type="text" value={search} placeholder="아이디를 검색하세요." onChange={onChangeSearch} />
   <button type='submit'>검색</button>
</form>
    const [show,setShow]=useState(1);
    const navi=useNavigate();
    const {currentPage}=useParams();
    return (
        <div>
           

           {/* <button type="button" className="btn btn-info"
           style={{width:'110px', marginTop:'10px'}}
           onClick={()=>{
            navi("/board/form");
           }}>글쓰기</button> */}

<div className="list-icon">
            <span className="glyphicon glyphicon-asterisk"
            style={{color:show===1?'skyblue':'#A390EE'}}
            onClick={()=>{
                setShow(1);
            }}></span>
             <span className="glyphicon glyphicon-heart"
             style={{color:show===2?'red':'#A390EE'}}
            onClick={()=>{
                setShow(2);
            }}></span>
             <span className="glyphicon glyphicon-star-empty"
             style={{color:show===3?'#FFD700':'#A390EE'}}
            onClick={()=>{
                setShow(3);
            }}></span>
        </div>
        <div>
        {show===1?<BoardList1 currentPage={currentPage}/>:show===2?<BoardList2/>:<BoardList3/>}
    
        </div>

        </div>
    )
}

export default Board;