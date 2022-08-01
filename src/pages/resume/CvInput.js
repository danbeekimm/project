import React, { useState } from 'react';
import './ResumeInput.css';

const CvInput = ({ setCom_cv, com_cv }) => {
    const [letterNum, setLetterNum] = useState('');

    const NumChange = (e) => {
        setLetterNum(e.target.value);
        setCom_cv(e.target.value);
    }

    return (
        <>
            <tr>
                <th colSpan='2' className='title'>경력기술서</th>
            </tr>
            <tr>
                <td className='textarea'>
                    <textarea placeholder='경력기술서를 작성해주세요' onChange={NumChange} defaultValue={com_cv}></textarea>
                </td>
            </tr>
            <tr>
                <td className='letterNum'><b>{letterNum.length}/1000</b></td>
            </tr>
        </>
    );
};

export default CvInput;