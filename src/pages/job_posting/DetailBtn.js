import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DetailBtn = () => {
    const Navi = useNavigate();
    const { corp_id, num } = useParams();

    const updateJob = () => {
        if (window.confirm("채용공고를 수정하시겠습니까?")) {
            Navi('/job_posting/update/' + corp_id + '/' + num);
        } else {
            return;
        }
    }
    return (
        <div className='btn_s'>
            <button type='button' className='btn btn-light'>목록</button>
            <button type='button' className='btn btn-dark' onClick={updateJob}>수정</button>
        </div>
    );
};

export default DetailBtn;