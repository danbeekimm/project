import * as React from 'react';
import '../App.css';
import axios from 'axios';

import {useNavigate,useParams,Link} from "react-router-dom";


import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function BoardForm(){


    const [photo, setPhoto] = React.useState('');
    const [title,setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [heart, setHeart] = React.useState('');
    const [nikname, setNikname] = React.useState('');
    const [category,setCatecory] = React.useState('커리어');
    const [totalheart, setTotaleart] = React.useState('');

    const navi = useNavigate();

    // let loginok = localStorage.loginok;
    // let id = localStorage.myid;

    const uploadUrl = "http://localhost:9001/board/upload"
    const insertUrl = "http://localhost:9001/board/insert"
    const photoUrl = "http://localhost:9001/save/"

    // const initFunc = () => {
    //     if(loginok !== 'yes'){
    //         alert("먼저 로그인 후 글을 작성해주세요")
    //         navi("/login")
    //     }
    // }

    //file change 시 호출 이벤트
    const uploadImage = e => {
        const uploadFile = e.target.files[0]; 
        const imageFile = new FormData();
        imageFile.append("uploadFile", uploadFile); //첫번째 인자가 스프링으로 넘어가는 애

        axios({
            method:'post',
            url:uploadUrl,
            data:imageFile,
            headers:{'Content-Type':'multipart/form-data'} //뭐 어쩌구저쩌구라 이거롤 바꿔줘야 ㅏㅁ
        }).then( res => { //파일을 여기로 보냄
            setPhoto(res.data); //백엔드에서 보낸 변경된 이미지명을 photo 변수에 넣는다
        }).catch( err => {
            alert(err);
        });
    }

    //submit 이벤트
    const onSubmitInsert = e => {
        e.preventDefault();

        axios.post(insertUrl,{title,content,category_name:category,photo,heart,nikname,totalheart})
        .then(res=>{
            navi("/board/list/1");
            console.log("글쓰기 성공")
            
        })
    }

    // const insertData = (values) => {
        
    //     console.log('Received values of form: ', values);
    //     axios.post(insertUrl)
    //     .then(res=>{
    //         console.log("insert 성공")
    //     })
    // }


    // React.useEffect(()=> {
    //     initFunc();
    // },[])



    return <div className='boartForm'>
    <img alt='' src={photoUrl+photo} className='imgphoto'/>
    <form onSubmit={onSubmitInsert}>
    <div class="qna_write_selection">
            <span class="qna_category_tit" style={{marginRight:"10px"}}>카테고리</span>
            <div class="box_qna_category">
            <select className='category' name='category_name'
                                onChange={(e)=>{
                                    console.log("cat",e.target.value)
                                    setCatecory(e.target.value)
                                }}>
                                    <option value='커리어' selected>커리어</option>
                                    <option value='QandA'>Q&A</option>
                                    <option value='취준'>취준</option>
                                    <option value='이직'>이직</option>
                                    <option value='퇴사'>퇴사</option>
                                    <option value='잡담'>잡담</option>
                                </select>
</div>
</div>

<br></br>


                
<input writer="text" name="qst_title" id="qst_title"  class="qna_subject_input" required
placeholder="제목을 입력해주세요"
                        onChange={e=>{
                            setTitle(e.target.value)
                        }}/>

{/* 공백 */}
<br></br>


         <a colSpan={2}>
                        <TextareaAutosize className='text' style={{height:"450px"}}
                                 aria-label="empty textarea"
                                placeholder="내용을 입력해주세요

                                 * 등록한 글은 커뮤니티에서 사용중인 닉네임으로 등록됩니다.
                                 * 저작권 침해, 음란, 청소년 유해물, 기타 위법자료 등을 게시할 경우 게시물은 경고 없이 삭제 됩니다." required
                          
                        onChange={e=>{
                            setContent(e.target.value)
                        }}></TextareaAutosize>
                    </a>
      
           
                    <br></br><br></br>
{/*                         
                        <div>
                    if ( {heart}==0 ) {
                        
                        "♡"
                    }
                    </div>                        */}
                 
                    <input type='file' className='form-control' style={{width:'100%'}} required
                                onChange={uploadImage}/>

               
               
                        {/* <h1>{id}</h1> */}
                       

                    
            <br></br><br></br>
                   
             <div className='buttonmain'>
                    <a colSpan={2} align='center'>
                        <button writer="submit" className='btn btn-primary'
                        style={{height:"50px",width:"260px",position:"relative"}}
                        >게시글 작성</button>

                       
                    </a>
              </div>
<br></br><br></br>

  
    </form>
</div>
}