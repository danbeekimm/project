import React, { useEffect, useState } from 'react';
import './ResumeInput.css';
import { set, useForm } from 'react-hook-form';
import Resume from './Resume';
import { Link } from 'react-scroll';
import TechInput from './TechInput';
import CvInput from './CvInput';
import IntroInput from './IntroInput';
import Major from './Major';
import Senior from './Senior';
import TotalYM from './TotalYM';
import Portfolio from './Portfolio';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AddSenior from './AddSenior';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UserInfo from './UserInfo';
import ExpInfo from './ExpInfo';
import SideBar from './SideBar';
import Category from './Category';

const ResumeInput = () => {
    const [visible, setVisible] = useState(false); //이력서 불러오기 클릭시 보이기, 숨기기
    const [resumes, setResumes] = useState([]); //불러올 이력서 목록
    const [addTech, setAddTech] = useState(false); //기술 추가
    const [addCv, setAddCv] = useState(false); //CV 추가
    const [addIntro, setAddIntro] = useState(false); //자기소개 추가
    const [addPort, setAddPort] = useState(false); //포트폴리오 추가
    const [radio, setRadio] = useState('중학교');
    const [radio2, setRadio2] = useState('신입');
    const [publicClosed, setPublicClosed] = useState('1');
    const [addRows, setAddRows] = useState(false);

    // 보내는 값
    // const [user_id,setUser_id]=useState('');
    const [resume_idx, setResume_idx] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [user_photo, setUser_photo] = useState('');
    const [user_birth, setUser_birth] = useState('');
    const [user_gender, setUser_gender] = useState('');
    const [user_email, setUser_email] = useState('');
    const [user_hp, setUser_hp] = useState('');
    const [addr, setAddr] = useState('');
    const [addr_detail, setAddr_detail] = useState('');
    const [user_addr, setUser_addr] = useState('');

    const [sch_name, setSch_name] = useState('');
    const [sch_region, setSch_region] = useState('');
    const [sch_start, setSch_start] = useState('');
    const [sch_end, setSch_end] = useState('');
    const [sch_major, setSch_major] = useState('');
    const [arr, setArr] = useState({
        com_name: ['', ''],
        com_region: ['', ''],
        com_start: ['', ''],
        com_end: ['', ''],
        quit_reason: ['', ''],
        com_position: ['', ''],
        com_department: ['', ''],
        com_mainwork: ['', ''],
        com_salary: ['', ''],
        total_year: ['0', '0']
    })

    const [tech_tags, setTech_tags] = useState([]);
    const bodyFormData = tech_tags.join(','); // 배열을 String으로 바꾸는 함수
    const [job_type, setJob_type] = useState([]);
    // const jobType = job_type.join(',');

    const [com_cv, setCom_cv] = useState('');
    const [intro, setIntro] = useState('');
    const [pot_link, setPot_link] = useState('');
    const [pot_file, setPot_file] = useState('');
    const [res_name, setRes_name] = useState('');
    const [edu_radio, setEdu_radio] = useState('0');
    const [exp_radio, setExp_radio] = useState('0');
    const [open_radio, setOpen_radio] = useState('0');



    const radioChange = (e) => {
        setRadio(e.target.value);

        if (e.target.value === '중학교') {
            setEdu_radio('0');
            setSch_name('');
        }

        if (e.target.value === '고등학교') {
            setEdu_radio('1');
            setSch_name('');
        }

        if (e.target.value === '대학교/대학원') {
            setEdu_radio('2');
            setSch_name('');
        }
    }

    const radio2Change = (e) => {
        setRadio2(e.target.value);

        if (e.target.value === '신입') {
            setExp_radio('0');
            setArr({
                ...arr,
                com_name: ['', ''],
                com_region: ['', ''],
                com_start: ['', ''],
                com_end: ['', ''],
                com_department: ['', ''],
                com_position: ['', ''],
                com_mainwork: ['', ''],
                com_salary: ['', ''],
                quit_reason: ['', ''],
                total_year: ['', '']
            })
        }

        if (e.target.value === '경력') {
            setExp_radio('1');
        }
    }

    const publicClosedChange = (e) => {
        setPublicClosed(e.target.value);

        if (e.target.value === '공개') {
            setOpen_radio('0');
        }

        if (e.target.value === '비공개') {
            setOpen_radio('1');
        }
    }

    const addEvent = (e) => {
        setAddRows(!addRows);
    }

    const Navi = useNavigate();
    const [detail_idx, setDetail_idx] = useState('');
    const { user_id } = useParams();

    //url 등록
    let insertUrl = "http://localhost:9000/resume/insert";
    let userInfo = "http://localhost:9000/resume/userinfo?username=" + user_id;
    let saveResume = "http://localhost:9000/resume/saveresume";
    let getIdx = "http://localhost:9000/resume/getidx?username=" + user_id;
    let getDetailIdx = "http://localhost:9000/resume/getdetailidx?username=" + user_id;

    //info 값 불러오기 
    const info = () => {
        axios.get(userInfo).then(res => {
            setUsername(res.data.username); //아이디
            setName(res.data.name); //이름
            setUser_hp(res.data.user_hp);
            setUser_photo(res.data.user_photo);
            setUser_addr(res.data.user_addr); //희망근무지
            setJob_type(res.data.job_type.split(',')); //희망직군
            setAddr(res.data.addr); //주소
            setAddr_detail(res.data.addr_detail); //주소디테일
            setUser_birth(res.data.user_birth);
            setUser_email(res.data.user_email);
            setUser_gender(res.data.user_gender);
            setUser_photo(res.data.user_photo);
            // setUser_idx
        })
    }

    // console.log(pot_file);
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        document.location.reload();
    }

    const handleClose2 = () => {
        setOpen(false);
        Navi("/resume/detail/" + user_id + "/" + detail_idx);
    }


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    //resume 중간저장
    const SaveResume = () => {
        axios.post(saveResume, {
            user_id, username, name, user_hp, user_photo, addr, addr_detail, user_addr, user_birth, user_email, user_gender, sch_name, sch_region, sch_start, sch_end, sch_major, com_name: arr.com_name.join(','), com_region: arr.com_region.join(','), com_start: arr.com_start.join(','), total_year: arr.total_year.join(','), open_radio: Number(open_radio), edu_radio: Number(edu_radio), exp_radio: Number(exp_radio),
            com_end: arr.com_end.join(','), quit_reason: arr.quit_reason.join(','), com_position: arr.com_position.join(','), com_department: arr.com_department.join(','), com_mainwork: arr.com_mainwork.join(','), com_salary: arr.com_salary.join(','), tech_tags: bodyFormData, com_cv, intro, pot_link, pot_file, res_name, job_type: job_type.join(',')
        })
            .then(res => {
                axios.get(getIdx).then(res => {
                    setResume_idx(res.data.resume_idx);
                    handleOpen();
                })
            })
    }
    console.log(job_type)
    //resume 값 보내기
    const confirmRes = (e) => {
        e.preventDefault();
        console.log("pot", pot_file)
        if (!window.confirm("이력서를 등록하시겠습니까?")) {
            return;
        } else {
            axios.post(insertUrl, {
                user_id, username, name, user_hp, user_photo, addr, addr_detail, user_addr, user_birth, user_email, user_gender, sch_name, sch_region, sch_start, sch_end, sch_major,
                com_name: arr.com_name.join(','), com_region: arr.com_region.join(','), com_start: arr.com_start.join(','), total_year: arr.total_year.join(','),
                open_radio: Number(open_radio), edu_radio: Number(edu_radio), exp_radio: Number(exp_radio), com_end: arr.com_end.join(','), quit_reason: arr.quit_reason.join(','),
                com_position: arr.com_position.join(','), com_department: arr.com_department.join(','), com_mainwork: arr.com_mainwork.join(','), com_salary: arr.com_salary.join(','),
                tech_tags: bodyFormData, com_cv, intro, pot_link, pot_file, res_name, job_type: job_type.join(',')
            })
                .then(res => { handleOpen2(); });
        }
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleOpen2 = () => {
        axios.get(getDetailIdx).then(res => {
            setDetail_idx(res.data.resume_idx);
            setOpen2(true);
        });
    }

    const toSave = () => {
        Navi("/resume/save/" + user_id + "/" + resume_idx);
    }

    useEffect(() => {
        info();
        getRes();
    }, []);

    const cancel = () => {
        if (window.confirm("취소하시겠습니까?")) {
            window.history.go(-1);
        } else {
            return;
        }
    }

    //URL
    let getResumeList = "http://localhost:9000/resume/resumelist?username=" + user_id;
    const [resumeList, setResumeList] = useState([]);
    const getRes = () => {
        axios.get(getResumeList).then(res => {
            setResumeList(res.data);
        })
    }

    return (
        <div className='ResumeInput'>
            {/* 이력서 불러오기 */}
            <div className="BringResume" onClick={() => {
                setVisible(!visible);
            }}>
                <b className="Title">이력서 불러오기</b>
                <br />
                <b className="SubTitle">불러올 이력서를 선택해주세요<span>▼</span></b>
            </div>
            {/* 클릭시 아래로 나오는 화면 */}
            {visible && <Resume resumeList={resumeList} />}
            {/* 우측바 */}
            <div className='SideBar'>
                <SideBar setAddTech={setAddTech} addTech={addTech} setAddCv={setAddCv} addCv={addCv} setAddIntro={setAddIntro}
                    setAddPort={setAddPort} addPort={addPort} addIntro={addIntro} />
            </div>
            {/* 입력폼 */}
            <form onSubmit={confirmRes}>
                <div className='ResumeInputForm'>
                    {/* 기본정보 */}
                    <UserInfo user_gender={user_gender} user_birth={user_birth} user_email={user_email} user_hp={user_hp} addr={addr} addr_detail={addr_detail}
                        username={username} name={name} user_photo={user_photo} />
                    {/* 학력사항 */}
                    <ExpInfo radioChange={radioChange} radio={radio} setSch_name={setSch_name} setSch_region={setSch_region} setSch_start={setSch_start} setSch_end={setSch_end} setSch_major={setSch_major} sch_major={sch_major} Major={Major} />
                    {/* 경력사항 */}
                    <table className='ResumeInput2'>
                        <tbody>
                            <tr>
                                <th colSpan='2'>경력사항</th>
                            </tr>
                            <tr>
                                <td colSpan='2' role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="radio" defaultValue="신입" className="btn-check" name="radio" id="btnradio4" autoComplete="off" defaultChecked onChange={radio2Change} />
                                    <label className="btn btn-outline-primary" htmlFor="btnradio4" style={{ width: '340px' }}>신입</label>

                                    <input type="radio" defaultValue="경력" className="btn-check" name="radio" id="btnradio5" autoComplete="off" onChange={radio2Change} />
                                    <label className="btn btn-outline-primary" htmlFor="btnradio5" style={{ width: '340px' }}>경력</label>
                                </td>
                            </tr>
                            {radio2 !== '신입' ? <Senior setArr={setArr} arr={arr} /> : <></>}
                        </tbody>
                    </table>
                    <table className='ResumeInput2'>
                        <tbody>
                            {radio2 !== '신입' ? <TotalYM arr={arr} setArr={setArr} /> : <></>}
                        </tbody>
                    </table>
                    {/* 보유기술 */}
                    {addTech &&
                        <table className='ResumeInput2'>
                            <tbody id='1'>
                                <TechInput setTech_tags={setTech_tags} tech_tags={tech_tags} />
                            </tbody>
                        </table>
                    }
                    {/* 경력기술서 */}
                    {addCv &&
                        <table className='ResumeInput2'>
                            <tbody id='2'>
                                <CvInput setCom_cv={setCom_cv} />
                            </tbody>
                        </table>}
                    {/* 자기소개서 */}
                    {addIntro &&
                        <table className='ResumeInput2'>
                            <tbody id='3'>
                                <IntroInput setIntro={setIntro} />
                            </tbody>
                        </table>}
                    {/* 포트폴리오 */}
                    {addPort &&
                        <table className='ResumeInput2'>
                            <tbody id='4'>
                                <Portfolio setPot_link={setPot_link} setPot_file={setPot_file} pot_file={pot_file} pot_link={pot_link} />
                            </tbody>
                        </table>}
                    {/* 이력서제목/공개여부 */}
                    <table className='ResumeInput2'>
                        <tbody>
                            <tr>
                                <th colSpan='2'>이력서 제목</th>
                            </tr>
                            <tr>
                                <td className='name'>이력서 제목&nbsp;<span>필수</span></td>
                                <td className='input'>
                                    <input type='text' placeholder='이력서 제목 입력' required onChange={(e) => {
                                        setRes_name(e.target.value);
                                        // console.log(res_name);
                                    }} />
                                </td>
                            </tr>
                            <tr>
                                <th colSpan='2'>이력서 공개여부</th>
                            </tr>
                            <tr>
                                <td colSpan='2' role="btn-group" aria-label="Basic checkbox toggle button group">
                                    <input type="radio" defaultValue="공개" className="btn-check" name="radio3" id="btnradio6" autoComplete="off" defaultChecked onChange={publicClosedChange} />
                                    <label className="btn btn-outline-primary" htmlFor="btnradio6" style={{ width: '340px' }}>공개</label>

                                    <input type="radio" defaultValue="비공개" className="btn-check" name="radio3" id="btnradio7" autoComplete="off" onChange={publicClosedChange} />
                                    <label className="btn btn-outline-primary" htmlFor="btnradio7" style={{ width: '340px' }}>비공개</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    {/* 버튼 */}
                    <div className="Button">
                        <button type='button' className='btn btn-outline-dark' onClick={cancel}>취소</button>
                        <button type='button' className='btn btn-outline-dark' onClick={SaveResume}>저장</button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center' }}>
                                    이력서 저장이 완료되었습니다.<br />
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 1 }} style={{ textAlign: 'center' }}>
                                    <button type='button' className='btn btn-dark' onClick={toSave} style={{ width: '150px' }}>확인</button>
                                </Typography>
                            </Box>
                        </Modal>
                        <button type='submit' className='btn btn-outline-dark'>등록</button>
                        <Modal
                            open={open2}
                            onClose={handleClose2}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center' }}>
                                    이력서 등록이 완료되었습니다.<br />
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 1 }} style={{ textAlign: 'center' }}>
                                    <button type='button' className='btn btn-dark' onClick={handleClose2} style={{ width: '150px' }}>확인</button>
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ResumeInput;