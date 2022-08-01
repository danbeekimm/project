import axios from 'axios';
import React from 'react';

const Portfolio = ({ setPot_link, setPot_file, pot_link, pot_file }) => {
    let uploadUrl = "http://localhost:9000/jobposting/upload";

    //file change 호출 이벤트
    const uploadImage = (e) => {
        const uploadFile = e.target.files[0]; //업로드한 파일
        //객체에 전달 
        const imageFile = new FormData();
        imageFile.append("uploadFile", uploadFile); //백앤드에 저장한 변수명과 동일해야한다

        axios({
            method: 'post',
            url: uploadUrl,
            data: imageFile,
            headers: { 'Context-Type': 'multipart/form-data' }
        }).then(res => {
            setPot_file(res.data);//백앤드에서 보낸 변경된 이미지명 //백앤드 return값 photoName 
        }).catch(err => {
            alert(err);
        });
    }
    return (
        <>
            <tr>
                <th colSpan='2' className='title'>포트폴리오</th>
            </tr>
            <tr>
                <td className='nameTech'>링크</td>
                <td className='inputTech'>
                    <input type='text' placeholder='관련 링크를 입력해주세요' defaultValue={pot_link} onChange={(e) => {
                        setPot_link(e.target.value);
                    }} />
                </td>
            </tr>
            <tr>
                <td className='nameTech'>파일</td>
                <td className='inputTech2'>
                    <input type='file' style={{ border: 'none', backgroundColor: '#f9f9f9b4' }} onChange={uploadImage} />&emsp;<span>{pot_file}</span>
                </td>
            </tr>
        </>
    );
};

export default Portfolio;