import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import { ResumeListContext } from '../NewResume';
import { ApplicantContext } from '../../applicantManagement/ApplicantManagement';
import EmailModal from '../EmailModal';
import axios from 'axios';

const ToggleSelect = styled.button`
    
`;
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


const resumeProgress = [
    `축하드립니다 [지원자명]님!
    
    [포지션명]에 합격하셨습니다.
    
    [회사명]의 채용 담당자의 연락을 기다려주시기 바라며,
    연락이 늦어지는 경우 리마인더를 요청해주세요.
    
    좋은 결과를 기원합니다.
    감사합니다.`,
    `안녕하세요, [지원자명]님.
    
    안타깝게도 [회사명] 의 [포지션명]에
    합격 소식을 전하지 못하게 되었습니다.
                                                    
    비슷한 직무를 경험하셨더라도 실행하셨던 프로젝트들의
    산업 분야, 기간, 규모, 본인의 역할, 기술 적합도에 따라
    기업의 평가가 달라질 수 있는 점 양해 부탁 드립니다.
    앞으로 더 좋은 인연으로 만나 뵐 수 있기를 바랍니다.
    보여주신 관심과 성의에 진심으로 감사드립니다.`,
    `안녕하세요 [지원자명]님,
    
    지원하신 [회사명] [포지션명]에 합격하셨습니다.
    진심으로 축하드립니다.
    
    관련 구비 서류나 입사일 등 자세한 입사 진행 절차는
    채용 담당자께서 직접 안내드릴 예정입니다.
    
    그간 소중히 쌓아오신 경험이 새로운 보금자리에서 
    더욱 빛날 수 있기를 기원합니다!
    
    감사합니다.`
    ];

const ResumeStateButton = ({ setCat }) => {
    const { alarm, open, anchorEl,id, checkedList, resumeStateAlarm, buttonMatch } = useContext(ResumeListContext);
    const { cat } = useContext(ApplicantContext);
    let applicantName = checkedList.map(data => data.user_name);
    
    let title = "지원 결과 알람"
    let cont = ""
    // const [title, setTitle] = useState();
    const [content, setContent] = useState();
    let toProg =""
    const [toProgress, setToProgress] = useState();
    
    let btns = [];
    if(cat==0){
        btns = ['서류통과',1]
        cont=resumeProgress[0]
    }else{
        btns = ['최종합격',2]
        cont=resumeProgress[2]
    }
    
    useEffect(()=>{
        setContent(cont)
    },[cont])


    const datas = { "list": checkedList, "title": title, "content": content }

    const testList =[];
    checkedList.map(data=>{return testList.push({user_id:data.user_id, title:title, content:content.replace("[지원자명]",data.user_name).replace("[회사명]",data.corp_name).replace("[포지션명]",data.job_position), corp_idx:data.corp_idx, apply_num:data.num})})
    
    console.log('testList',testList)


    const submitAlarm = () => {
        const alarmUrl = process.env.REACT_APP_SPRING_URL + "corpManagement/insertAlarm";
        axios.post(alarmUrl, testList, {
            headers: { "Content-Type": `application/json` }
        })
            .then(res => {
                console.log("insertAlarm 성공", res);
            })
            .catch(err => {
                console.log(err)
            })
        resumeStateAlarm(toProgress);
    }


    return (
        <>
        {/* modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header" style={{ borderBottom: 'none', display: 'flex', flexDirection: 'column' }}>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <h5 className="modal-title" id="exampleModalLabel">알람 보내기</h5>
                        </div>
                            <p style={{fontSize:'13px',color:'#999', padding:'0 16px'}}>*[지원자명], [회사명], [포지션명]에는 지원자의 정보에 알맞는 값으로 바뀌어 보내집니다.</p>
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
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                onClick={submitAlarm}>확인</button>
                        </div>
                    </div>
                </div>
            </div>
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', marginTop: '5px' }}>
                            {alarm ? <ToggleSelect
                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                                onClick={()=>{if(cat==0)setToProgress(1);else setToProgress(2)}}
                            >{btns[0]}</ToggleSelect> :
                                <ToggleSelect
                                    onClick={() => {
                                        checkedList.length == 0 ? alert("1개 이상 체크해주세요.") : resumeStateAlarm(btns[1]);
                                    }}>{btns[0]}</ToggleSelect>}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '10px', justifyContent: 'center' }}>
                                <p style={{ borderBottom: '1px solid lightgray', width: '75px' }}></p>
                            </div>
                            {alarm ? <ToggleSelect
                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                                onClick={()=>{setContent(resumeProgress[1]); setToProgress(3)}}
                                >불합격</ToggleSelect> :
                                <ToggleSelect
                                    onClick={() => {
                                        checkedList.length == 0 ? alert("1개 이상 체크해주세요.") : resumeStateAlarm(3);

                                }}>불합격</ToggleSelect>}
                        </Box>
                    </Fade>
                )}
            </Popper>
        </>
    );
};

export default ResumeStateButton;