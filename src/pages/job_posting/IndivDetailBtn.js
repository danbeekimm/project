import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const IndivDetailBtn = () => {

    const { num } = useParams();
    const [open, setOpen] = React.useState(false);
    const [resumeList, setResumeList] = useState([]);
    const [resume_idx, setResume_idx] = useState('');
    const [indiv_id, setIndiv_id] = useState('');
    const [corp_idx, setCorp_idx] = useState('');
    const [job_posting_idx, setJob_posting_idx] = useState('');
    const [job_position, setJob_position] = useState('');
    const [applyday, setApplyday] = useState('');
    const username = localStorage.username;

    const indivID = () => {
        setIndiv_id(username);
    }

    //URL
    const Navi = useNavigate();
    let getResumeList = "http://localhost:9000/resume/resumelist?username=" + username;
    let jobInfoURL = "http://localhost:9000/jobposting/detail?num=" + num;
    let insertURL = "http://localhost:9000/jobposting/insertapply";

    const getRes = () => {
        axios.get(getResumeList).then(res => {
            setResumeList(res.data);
        })
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => {
        setOpen2(true);
    }

    const handleClose2 = () => {
        window.location.reload();
    }

    //채용공고 데이터 
    const jobInfo = () => {
        axios.get(jobInfoURL).then(res => {
            setCorp_idx(res.data.corp_idx);
            setJob_posting_idx(res.data.num);
            setJob_position(res.data.job_type);
        })
    }

    const apply = () => {
        axios.post(insertURL, { resume_idx, indiv_id, corp_idx, job_posting_idx, job_position, applyday })
            .then(res => {
                setOpen2(true);
            })
    }

    useEffect(() => {
        getRes();
        indivID();
        jobInfo();
    }, [])

    return (
        <div className='btn_s'>
            <button type='button' className='btn btn-light' onClick={() => {
                window.history.go(-1);
            }}>목록</button>
            <button type='button' className='btn btn-dark' onClick={() => {
                setOpen(true);
            }}>입사지원</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center' }}>
                        <span className='titleS'>채용공고 지원하기</span><br /><br />
                        <select className='applyS' onChange={(e) => {
                            setResume_idx(e.target.value);
                        }}>
                            <option>이력서를 선택하세요</option>
                            {
                                resumeList.map((a, idx) => (
                                    <option value={a.resume_idx}>{a.res_name}</option>
                                ))
                            }
                        </select>
                    </Typography><br />
                    <Typography id="modal-modal-description" sx={{ mt: 1 }} style={{ textAlign: 'center' }}>
                        <button type='button' className='btn btn-outline-dark' onClick={handleClose} style={{ width: '225px' }}>취소</button>
                        &emsp;<button type='button' className='btn btn-dark' onClick={apply} style={{ width: '225px' }}>지원</button>
                    </Typography>
                </Box>
            </Modal>
            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <br /><br /><br />
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center' }}>
                        <span className='titleS'>이력서 지원이 완료되었습니다.</span>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }} style={{ textAlign: 'center' }}>
                        <button type='button' className='btn btn-outline-danger' onClick={handleClose2} style={{ width: '180px', height: '40px' }}>확인</button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default IndivDetailBtn;