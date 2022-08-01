import React, { useState } from 'react';
import './ResumeInput.css';

const TotalYM = ({ arr, setArr }) => {
    const [add, setAdd] = useState(false);
    const changeNum = Number(arr.total_year[0] + arr.total_year[1]);
    // console.log(changeNum);
    let Year = 0;
    let Month = changeNum;

    while (Month > 11) {
        Month -= 12;
        Year += 1;
    }

    return (
        <>
            {add &&
                <tr className='TotalYM'>
                    <td>총 경력 {Year > 0 ? `${Year}년 ${Month}개월` : `${Month}개월`}</td>

                </tr>
            }
        </>
    );
};

export default TotalYM;