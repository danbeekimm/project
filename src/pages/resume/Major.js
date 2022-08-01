import React from 'react';
import './ResumeInput.css';

const Major = ({ setSch_major, sch_major }) => {
    return (
        <>
            <td className='name'>전공&nbsp;<span>필수</span></td>
            <td className='input'>
                <input type='text' placeholder='전공 입력' required defaultValue={sch_major} onChange={(e) => {
                    setSch_major(e.target.value);
                }} />
            </td>
        </>
    );
};

export default Major;