import React,{useState,useEffect} from "react";
import '../App.css';
import axios from "axios";
import {useNavigate,useParams} from 'react-router-dom';

const BoardUpdateForm = () => {


     const handleClickOpen = () => {
       setOpen(true);
     };
   
     const handleClose = () => {
       setOpen(false);
     };

   
    
    // //스프링으로부터 board_id 에 해당하는 data 받기
    // const onDataReceive=()=>{
    //     axios.get(detailUrl)
    //     .then(res=>{
           
    //         setData(res.data);
    //     }).catch(err=>{
    //         alert(err.data);
    //     })
    // }

 
        
    // //처음 랜더링시 위의 함수 호출
    // useEffect(()=>{
    //     onDataReceive();
    // },[]);



    const {board_id}=useParams();
    const [photo,setPhoto] = useState('');
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const {currentPage}=useParams();
    const [data,setData]=useState('');
    const navi=useNavigate();
    const [dto,setDto]=useState('');
    //삭제 다이얼로그에 대한 코드 추가
    const [open, setOpen] = React.useState(false);

    let pagelistUrl="http://localhost:9001/board/pagelist?currentPage="+board_id;
    let uploadUrl="http://localhost:9001/board/upload";
    let detailUrl="http://localhost:9001/board/detail?board_id="+board_id;
    let photoUrl="http://localhost:9001/save/";
    let updateUrl="http://localhost:9001/board/update";


    //file change 시 호출 이벤트
    const uploadImage=(e)=>{
        const uploadFile=e.target.files[0];
        const imageFile=new FormData();
        imageFile.append("uploadFile",uploadFile);

        axios({
            method:'post',
            url:uploadUrl,
            data:imageFile,
            headers:{'Content-Type':'multipart/form-data'}
        }).then(res=>{
            setPhoto(res.data);//백엔드에서 보낸 변경된 이미지명을 photo 변수에 넣는다
        }).catch(err=>{
            alert(err);
        });
    }

    // //스프링으로부터 board_id 에 해당하는 data 받기
    const onDataReceive=()=>{
        axios.get(detailUrl)
        .then(res=>{
            console.log(res.data.board_id);
            // setBoard_id(res.data.board_id);
            setPhoto(res.data.photo);
            setTitle(res.data.title);
            setContent(res.data.content);   
        }).catch(err=>{
            console.log(err.data);
        })
    }

     //처음 랜더링시 위의 함수 호출
     useEffect(()=>{
        console.log(window.location);
        onDataReceive();
    },[board_id]);

     //시작시 호출되는 함수 
    //  const pageList=()=>{
    //     axios.get(detailUrl)
    //     .then(res=>{
    //         setData(res.data);
    //         console.log(res.data);
    //     })
    // }

    // useEffect(()=>{
    //     console.log(window.location);
    //     onDataReceive();
    //     console.log("photo",data)
    // },[board_id]);
    

    //수정하는 함수 이벤트
    const onUpdate=()=>{
        axios.post(updateUrl,{board_id,title,content})
        .then(res=>{
           //insert 성공후 처리할 코드들          
           //목록으로 이동
           navi(`/board/detail/${board_id}`);
        })
    }

    return (
        <div>
           <table className="table table-bordered" style={{width:'600px',fontSize:'20px'}}>
                {/* <caption><b>(번호 : {board_id})</b></caption> */}
                <tbody>
                    <tr>
                        <th width='100' style={{backgroundColor:'#edf'}}>제목</th>
                        <td width='300'>
                            <input type='text' className="form-control"
                            style={{width:'250px'}} defaultValue={title}
                            onChange={(e)=>{
                                setTitle(e.target.value);
                            }}/>
                        </td>
                        <th>{title}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#edf'}}>사진</th>
                        <td width='300'>
                            <input type='file' className="form-control"
                            style={{width:'250px'}} 
                            onChange={uploadImage}/>
                        </td>
                        <th>{photo}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#edf'}}>내용</th>
                        <td width='300'>
                            <input type='text' className="form-control"
                            style={{width:'120px'}} defaultValue={content}
                            onChange={(e)=>{
                                setContent(e.target.value);
                            }}/>
                        </td>
                        <th>{content}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#edf'}}>테스트</th>
                        <td width='300'>
                            <input type='text' className="form-control"
                            style={{width:'150px'}}  defaultValue={board_id}
                            onChange={(e)=>{
                                // setBoard_id(e.target.value);
                            }}/>
                        </td>
                        <th>{board_id}</th>
                    </tr>
                    <tr style={{height:'150px'}}>
                        <td colSpan='2'>
                            <img alt="" src={photoUrl+photo} 
                            style={{width:'50px',marginLeft:'130px'}}/>
                        </td>
                       
                    </tr>
                </tbody>
            </table> 
            <button type="button" className="btn btn-danger"
                            style={{width:'120px',height:'120px',marginLeft:'30px'}}
                            onClick={onUpdate}>
                                글수정</button>
        </div>
    );
};

export default BoardUpdateForm;