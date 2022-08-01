import React,{useState} from "react";


function Write(props) {
    const [writeInfo,setWriteInfo] = useState({
      id:'',
      title:'',
      content:'',
    })
    const inputChange = (e) =>{
      console.log(e.target.value)
      setWriteInfo({
        ...writeInfo,
        [e.target.name]:e.target.value
      })
    }

    return (
        <div>
           <div class="qna_write_selection">
                    <span class="qna_category_tit">카테고리</span>
                    <div class="box_qna_category"></div>
            <ul class="list_qna_category">
                <select>
                        <option>커리어</option>
                        <option>Q&A</option>
                        <option>취준</option>
                        <option>이직</option>
                        <option>퇴사</option>
                        <option>잡담</option>
                </select>
            </ul>

              </div>




             

<a
      sx={{
        width : '700px',
      bgcolor: '#cfe8fc', height: '600px', backgroundColor: '#fff',
      margin : '0 auto',
      paddingTop: '10px', textAlign: 'center', marginTop: '70px', borderRadius: '20px',
      boxShadow: '4px 4px 4px 4px gray'
      }}
    >
    <div className='write'>
      <form method='post' action='/postWrite'>
        <input type='text' placeholder='제목을 입력해주세요' name='title' onChange={inputChange}
        className='write_title'/>

        <textarea type='text' placeholder='내용을 입력해주세요' name='content' onChange={inputChange}
        className='write_textarea'/>

     
        <input type='submit' value='게시글 등록' onClick={()=>document.location.href='/'}
        className='write_submit'/>

        <a href='/'>목록</a>
      </form>
      
    </div>
    </a>
    




        </div>
    );
};

export default Write;