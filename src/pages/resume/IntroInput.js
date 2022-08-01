import React, { useState } from 'react';
import './ResumeInput.css';

const IntroInput = ({ setIntro, intro }) => {
    const [letterNum, setLetterNum] = useState('');

    const NumChange = (e) => {
        setLetterNum(e.target.value);
        setIntro(e.target.value);
    }

    return (
        <>
            <tr>
                <th colSpan='2' className='title'>자기소개서</th>
            </tr>
            <tr>
                <td className='textarea'>
                    <textarea placeholder='자기소개서를 작성해주세요' onChange={NumChange} defaultValue={intro}></textarea>
                </td>
            </tr>
            <tr>
                <td className='letterNum'><b>{letterNum.length}/1000</b></td>
            </tr>
        </>
    );
};

export default IntroInput;