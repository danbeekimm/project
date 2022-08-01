import React, { useContext } from 'react';
import styled from 'styled-components';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import { ResumeListContext } from './NewResume';
import { useEffect } from 'react';
import axios from 'axios';


const ContentWrapper = styled.div`
    border:1px solid lightgray;
    display:flex;
`;
const Contents = styled.div`
    white-space: pre;
    padding:10px;
    // border-right: 1px solid lightgray;
    width:460px;
`;
const Buttons = styled.div`
     
    width:280px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;
    .modal-buttons-top{
        width:100%;
        border-bottom:1px solid lightgray;
        text-align:center;
        height:50px;
        line-height:50px;
        background-color:#f0f0f5;
    }
    .chips{
        display:flex;
        flex-direction:column;
        flex-grow:1;
        justify-content: space-evenly;
    }
    .explain{
        font-size:14px;
        color:gray;
        padding: 0 10px 25px;
        width:250px;
    }
`;

const EmailModal = ({modalContent}) => {
    const { setTitle, alarm, checkedList } = useContext(ResumeListContext);
    useEffect(() => {

    }, [])

    let applicantName = checkedList.map(data => data.user_name);

    let title = "test 제목"
    let content = modalContent

    console.log("applicantName", applicantName)
    console.log("checkedList[0]", checkedList[0])

    const datas = { "list": checkedList, "title": title, "content": content }

    const submitAlarm = () => {
        const alarmUrl = process.env.REACT_APP_SPRING_URL + "corpManagement/insertAlarm";
        axios.post(alarmUrl, datas, {
            headers: { "Content-Type": `application/json` }
        })
            .then(res => {
                console.log("insertAlarm 성공", res);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            {/* modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header" style={{ borderBottom: 'none', display: 'flex', flexDirection: 'column' }}>
                            <h5 className="modal-title" id="exampleModalLabel">알람 보내기</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            {/* <p>지원자<span>{applicantName && applicantName}</span></p> */}
                        </div>
                        <div className="modal-body" style={{ display: 'flex', jestifyContents: 'center', alignItems: 'center' }}>
                            <ContentWrapper>
                                <Contents>
                                    <textarea name="" style={{ width: '440px', height: '390px', outline: 'none', border: '0' }} id="" value={content}>
                                    </textarea>
                                </Contents>
                                
                            </ContentWrapper>
                        </div>
                        <div className="modal-footer" style={{ borderTop: 'none' }}>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                            <button type="button" className="btn btn-primary"
                                onClick={submitAlarm}>확인</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmailModal;