import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ResumeInput.css';

const Resume = ({ resumeList }) => {

    const Navi = useNavigate();
    return (
        <div className="Resume">
            {
                resumeList.map((a, idx) => (
                    <div className='resumeL' onClick={() => {
                        if (window.confirm("작성된 이력서가 [" + a.res_name + "]이력서로 대체됩니다. \n계속 진행하시겠습니까?")) {
                            Navi('/resume/new/save/' + a.username + '/' + a.resume_idx);
                            window.location.reload();
                        } else {
                            return;
                        }
                    }}>
                        <span className='writeday' >{a.writeday}</span>
                        <span className='line'> | </span>
                        <span className='resName'>{a.res_name}</span>
                        <br />
                    </div>
                ))
            }

        </div>
    );
};

export default Resume;