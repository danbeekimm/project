import { borderRadius } from "@mui/system";
import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import './JobPostingInput.css';

const Post = ({ com_addr, setCom_addr }) => {

  const [addr1, setAddr1] = useState('');
  const [addr2, setAddr2] = useState('');
  const [show, setShow] = useState(false);
  const [showAddr2, setShowAddr2] = useState('');

  const onCompletePost = (data) => {
    console.log(data.address);
    setAddr1(data.address);
  };

  const clickEvent = () => {
    setCom_addr(addr1 + ' ' + addr2);
    setShowAddr2(addr2);
    setShow(true);
  }

  const postCodeStyle = {

    display: "block",
    // position: "absolute",
    // top: "1250px",
    // left: "650px",
    width: "520px",
    height: "450px",
    zIndex: 100,
    border: '1px solid black',
    marginTop: "10px",
    marginBottom: "50px"
  };

  return (
    <>
      <DaumPostcode
        style={postCodeStyle}
        autoClose
        onComplete={onCompletePost}
      />

      {addr1 &&
        <>
          <input type='text' className="input_det" placeholder="상세주소를 입력하세요" required onChange={(e) => {
            setAddr2(e.target.value);
          }} /> <span onClick={clickEvent} className='inputAddr'>확인</span>&emsp;
        </>
      }
      {showAddr2 &&
        <>
          <b className="text">주소가 입력되었습니다.</b>
        </>
      }
      <br />
      <span className="result">주소 : {addr1 !== '' ? addr1 + '\t' + showAddr2 : com_addr}</span>

    </>
  );
};

export default Post;