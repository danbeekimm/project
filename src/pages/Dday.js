import React from 'react';
import './Dday.css';

const Dday = (props) => {
    
    let today = new Date(), //현재 날짜 가져오기
        dday = new Date(props.enddate).getTime(), //디데이
        gap = dday - today,
        result = Math.floor(gap / (1000 * 60 * 60 * 24) + 1); 

        console.log("props",props.enddate);


    return (
        <div className='dday'>
        D-{result}
        </div>
    );
};

export default Dday;