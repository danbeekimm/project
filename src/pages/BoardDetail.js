import React,{useState,useEffect} from "react";
import '../App.css';
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";
import Comm_Home from "./Comm_Home";
import Comm_Total from "./Comm_Total";
import LikeButton from "./LikeButton";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const BoardDetail=()=>{
    const navi=useNavigate();
    const {board_id}=useParams();
    const [dto,setDto]=useState('');
    const [data,setData]=useState('');
     //삭제 다이얼로그에 대한 코드 추가
     const [open, setOpen] = React.useState(false);

     const handleClickOpen = () => {
       setOpen(true);
     };
   
     const handleClose = () => {
       setOpen(false);
     };

    let detailUrl="http://localhost:9001/board/detail?board_id="+board_id;
    let photoUrl="http://localhost:9001/save/";
    let hitUrl="http://localhost:9001/board/hit?board_id="+board_id+"&hit=";
    let deleteUrl="http://localhost:9001/board/delete?board_id="+board_id;
    
    // //스프링으로부터 board_id 에 해당하는 data 받기
    // const onDataReceive=()=>{
    //     axios.get(detailUrl)
    //     .then(res=>{
           
    //         setData(res.data);
    //     }).catch(err=>{
    //         alert(err.data);
    //     })
    // }

      //삭제시 호출할 함수
      const onDelete=()=>{
        console.log("delete")
        axios.delete(deleteUrl)
        .then(res=>{
            //삭제후 목록으로 이동
            navi("/board/list/1")
        })
        handleClose();//다이얼로그 닫기
    }
        
    // //처음 랜더링시 위의 함수 호출
    // useEffect(()=>{
    //     onDataReceive();
    // },[]);

    const getData=()=>{
        axios.get(detailUrl)
        .then(res=>{
            setDto(res.data);
            console.log(res.data);
            axios.get(hitUrl+(res.data.hit+1))
            .then(res=>{
                console.log("hit",res.data.hit);
            })
        })
        
    }


    useEffect(()=>{
        getData();
    },[]);



    return (
        <div>
                  <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {/* <h4> 삭제 확인</h4> */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h5>입력하신 글을 삭제하시겠어요? 삭제하려면 [확인] 버튼을 눌러주세요</h5>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={onDelete} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
            <Comm_Total/>
            <br></br>
            <br></br> <br></br> 
            <br></br>
           <table className="table" style={{width:'600px'}}>
            {/* <caption><b><h3>{dto.subject}</h3></b></caption> */}
            <tbody>
                {/* <tr>
                    <td>
                        <b>작성자:{dto.name}({dto.id})</b>
                        <span style={{float:'right',color:'gray'}}>{dto.writeday}</span>
                    </td>
                </tr> */}
                <tr>
                    <td>{dto.title}</td>
                </tr>


                <tr>
                    <td>
                    <img alt="" src={photoUrl+dto.photo}
                    style={{maxWidth:'100px'}}/>
                    <br></br>
                    <pre style={{backgroundColor:'white',border:'none'}}>
                        <span>{dto.content}</span></pre>
                    </td>
                </tr>
                <tr>
                    <td><b style={{color:'gray'}}>조회 {dto.hit}</b></td>
                </tr>

                <tr>
                    <td><b style={{color:'gray'}}>{dto.heart}</b></td>
                </tr>
                <tr>
                    <td><b style={{color:'gray'}}><LikeButton/></b></td>
                </tr>
              
                
                <tr>
                <td>
                        <button type="button" className="btn btn-info"
                        style={{widows:'100px',marginRight:'10px'}}
                        onClick={()=>{
                            navi(`/board/form/`);
                        }}>글쓰기</button>
                  
                        <button type="button" className="btn btn-info"
                        style={{widows:'100px',marginRight:'10px'}}
                        onClick={()=>{
                            navi(`/board/list/1`);
                        }}>목록</button>

                            <button type="button" className="btn btn-success"
                            onClick={()=>{
                                navi(`/board/update/${board_id}`);
                            }}>수정</button>
                            <button type="button" className="btn btn-warning"
                            onClick={handleClickOpen}>삭제</button>       
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default BoardDetail;